"use client";

import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatSession {
  userId?: string;
  sessionId?: string;
  messages: Message[];
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState<ChatSession>({
    userId: undefined,
    sessionId: undefined,
    messages: []
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Add a welcome message when the component mounts
  useEffect(() => {
    const welcomeMessage: Message = {
      id: '0',
      content: "Hi there! I'm your mental health assistant. How are you feeling today?",
      role: 'assistant',
      timestamp: new Date(),
    };
    
    setMessages([welcomeMessage]);
    setSession(prev => ({
      ...prev,
      messages: [...prev.messages, welcomeMessage]
    }));
  }, []);
  
  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Load session from localStorage
  useEffect(() => {
    try {
      const savedSession = localStorage.getItem('chat_session');
      if (savedSession) {
        const parsedSession = JSON.parse(savedSession);
        // Convert string timestamps back to Date objects
        const messagesWithDates = parsedSession.messages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setSession({
          ...parsedSession,
          messages: messagesWithDates
        });
        setMessages(messagesWithDates);
      }
    } catch (error) {
      console.error('Error loading chat session:', error);
    }
  }, []);

  // Save session to localStorage when it changes
  useEffect(() => {
    if (session.messages.length > 0) {
      localStorage.setItem('chat_session', JSON.stringify(session));
    }
  }, [session]);
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add the user message to the state
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setSession(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage]
    }));
    setInputValue('');
    setIsLoading(true);
    
    try {
      // Convert the session messages to the format expected by the API
      const historyForApi = session.messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      // Send the message to the API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
          userId: session.userId,
          sessionId: session.sessionId,
          history: historyForApi
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response from the API');
      }
      
      const data = await response.json();
      
      // Add the AI response to the state
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || "I'm sorry, I couldn't process that request.",
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      
      // Update the session with the new message and IDs
      setSession(prev => ({
        userId: data.userId || prev.userId,
        sessionId: data.sessionId || prev.sessionId,
        messages: [...prev.messages, aiMessage]
      }));
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add an error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, something went wrong. Please try again later.",
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
      setSession(prev => ({
        ...prev,
        messages: [...prev.messages, errorMessage]
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const clearConversation = () => {
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      content: "Hi there! I'm your mental health assistant. How are you feeling today?",
      role: 'assistant',
      timestamp: new Date(),
    };
    
    setMessages([welcomeMessage]);
    setSession({
      userId: undefined, // Keep the user ID for analytics
      sessionId: undefined, // Create a new session
      messages: [welcomeMessage]
    });
    localStorage.removeItem('chat_session');
  };
  
  return (
    <div className="flex flex-col h-full max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-xl font-semibold">Mental Health Assistant</h2>
        <button 
          onClick={clearConversation}
          className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded transition"
        >
          New Conversation
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 rounded-lg">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800 border border-gray-200'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
              <span className="text-xs opacity-70 mt-1 block">
                {message.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg p-3 bg-white text-gray-800 border border-gray-200">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1 p-3 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-3 rounded-r-md hover:bg-blue-600 transition disabled:bg-blue-300"
            disabled={isLoading || !inputValue.trim()}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;