// src/app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Environment variables for API key and endpoint
// Add these to your .env.local file
const SAMBANOVA_API_KEY = process.env.SAMBANOVA_API_KEY || '6b419c37-1ec9-4937-a93d-42de0df193d0';
const SAMBANOVA_API_ENDPOINT = process.env.SAMBANOVA_API_ENDPOINT || 'https://api.sambanova.ai/v1/chat/completions';

// Interface for the chat message
interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { message, userId, sessionId, history = [] } = body;
    
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Prepare the system message for mental health context
    const systemMessage = {
      role: 'system', 
      content: `You are an empathetic mental health assistant designed to provide supportive conversations.
      Your responses should be compassionate, non-judgmental, and focused on the user's wellbeing.
      Always prioritize user safety and encourage professional help when appropriate.
      Avoid giving medical diagnoses or specific treatment plans.
      Instead, focus on listening, validating feelings, and suggesting general coping strategies.`
    };

    // Format the messages for the SambaNova API
    const messages = [
      systemMessage,
      ...history,
      { role: 'user', content: message }
    ];

    // Call the SambaNova API
    const response = await fetch(SAMBANOVA_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SAMBANOVA_API_KEY}`
      },
      body: JSON.stringify({
        model: "Meta-Llama-3.1-70B-Instruct",
        messages: messages,
        temperature: 0.7,
        max_tokens: 500,
        stream: false
      })
    });

    // Check if the response is ok
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('SambaNova API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to get response from SambaNova API', details: errorData },
        { status: response.status }
      );
    }

    // Parse the response
    const data = await response.json();
    
    // Extract the assistant's response
    const assistantResponse = data.choices?.[0]?.message?.content || 
                             "I'm sorry, I couldn't generate a response at this moment.";
    
    return NextResponse.json({
      response: assistantResponse,
      sessionId: sessionId || `session_${Date.now()}`,
      userId: userId || `user_${Date.now()}`,
      model: "Meta-Llama-3.1-70B-Instruct"
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

// For CORS support
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  });
}