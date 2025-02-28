// src/utils/chatUtils.ts

// Types for chat messages and sessions
export interface ChatMessage {
    id: string;
    content: string;
    role: 'user' | 'assistant' | 'system';
    timestamp: Date | string;
  }
  
  export interface ChatSession {
    userId?: string;
    sessionId?: string;
    messages: ChatMessage[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
  }
  
  // Function to save chat session to localStorage
  export const saveChatSession = (sessionKey: string, session: ChatSession): void => {
    try {
      localStorage.setItem(sessionKey, JSON.stringify({
        ...session,
        updatedAt: new Date().toISOString()
      }));
    } catch (error) {
      console.error('Error saving chat session:', error);
    }
  };
  
  // Function to load chat session from localStorage
  export const loadChatSession = (sessionKey: string): ChatSession | null => {
    try {
      const savedSession = localStorage.getItem(sessionKey);
      if (!savedSession) return null;
      
      const parsedSession = JSON.parse(savedSession);
      
      // Convert string timestamps back to Date objects for the session
      const session: ChatSession = {
        ...parsedSession,
        createdAt: parsedSession.createdAt ? new Date(parsedSession.createdAt) : new Date(),
        updatedAt: parsedSession.updatedAt ? new Date(parsedSession.updatedAt) : new Date(),
        messages: parsedSession.messages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }))
      };
      
      return session;
    } catch (error) {
      console.error('Error loading chat session:', error);
      return null;
    }
  };
  
  // Create a new empty session
  export const createNewSession = (): ChatSession => {
    const now = new Date();
    const welcomeMessage: ChatMessage = {
      id: `msg_${Date.now()}`,
      content: "Hi there! I'm your mental health assistant. How are you feeling today?",
      role: 'assistant',
      timestamp: now
    };
    
    return {
      sessionId: `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      messages: [welcomeMessage],
      createdAt: now,
      updatedAt: now
    };
  };
  
  // Format messages for display with proper timestamps
  export const formatMessageTimestamp = (timestamp: Date | string): string => {
    const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  // Extract only the information needed for API requests
  export const prepareMessagesForAPI = (messages: ChatMessage[]): any[] => {
    return messages.map(({ role, content }) => ({ role, content }));
  };
  
  // Get sentiment score from message content (simple implementation)
  export const analyzeSentiment = (content: string): number => {
    const positiveWords = ['happy', 'good', 'great', 'excellent', 'better', 'improve', 'positive', 'joy', 'grateful'];
    const negativeWords = ['sad', 'bad', 'terrible', 'awful', 'worse', 'negative', 'anxious', 'depressed', 'worry', 'stress'];
    
    const words = content.toLowerCase().split(/\s+/);
    let score = 0;
    
    words.forEach(word => {
      if (positiveWords.includes(word)) score += 1;
      if (negativeWords.includes(word)) score -= 1;
    });
    
    return score;
  };