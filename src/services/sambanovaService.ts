// src/services/sambanovaService.ts
import { SAMBANOVA_CONFIG } from '@/config/sambanova';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatRequest {
  messages: ChatMessage[];
  userId?: string;
  sessionId?: string;
  maxTokens?: number;
  temperature?: number;
  model?: string;
}

export interface ChatResponse {
  content: string;
  userId: string;
  sessionId: string;
  model: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

// SambaNova API Service
export class SambanovaService {
  private apiKey: string;
  private apiEndpoint: string;
  
  constructor(
    apiKey: string = process.env.SAMBANOVA_API_KEY || '6b419c37-1ec9-4937-a93d-42de0df193d0',
    apiEndpoint: string = SAMBANOVA_CONFIG.API_ENDPOINT
  ) {
    this.apiKey = apiKey;
    this.apiEndpoint = apiEndpoint;
  }
  
  // Primary method to generate a chat response
  async generateChatResponse(request: ChatRequest): Promise<ChatResponse> {
    try {
      // Ensure system message is included
      const messages = this.ensureSystemMessage(request.messages);
      
      // Build request body
      const requestBody = {
        model: request.model || SAMBANOVA_CONFIG.DEFAULT_MODEL,
        messages: messages,
        temperature: request.temperature || SAMBANOVA_CONFIG.PARAMETERS.temperature,
        max_tokens: request.maxTokens || SAMBANOVA_CONFIG.PARAMETERS.max_tokens,
        stream: false
      };
      
      // Call SambaNova API
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify(requestBody)
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: response.statusText }));
        throw new Error(`SambaNova API error: ${JSON.stringify(errorData)}`);
      }
      
      const data = await response.json();
      
      // Format the response
      return {
        content: data.choices?.[0]?.message?.content || '',
        userId: request.userId || `user_${Date.now()}`,
        sessionId: request.sessionId || `session_${Date.now()}`,
        model: data.model || requestBody.model,
        usage: data.usage
      };
    } catch (error) {
      console.error('Error generating chat response:', error);
      throw error;
    }
  }
  
  // Helper method to ensure system message is included
  private ensureSystemMessage(messages: ChatMessage[]): ChatMessage[] {
    // Check if there's already a system message
    const hasSystemMessage = messages.some(msg => msg.role === 'system');
    
    if (!hasSystemMessage) {
      // Add system message at the beginning
      return [
        { role: 'system', content: SAMBANOVA_CONFIG.SYSTEM_PROMPT },
        ...messages
      ];
    }
    
    return messages;
  }
  
  // Method to stream chat responses (for future implementation)
  async streamChatResponse(request: ChatRequest, onChunk: (chunk: string) => void): Promise<ChatResponse> {
    // Implementation for streaming would go here
    // This is a placeholder for future development
    const response = await this.generateChatResponse(request);
    onChunk(response.content);
    return response;
  }
}

// Singleton instance for use throughout the application
export const sambanovaService = new SambanovaService();