// src/config/sambanova.ts

export const SAMBANOVA_CONFIG = {
    // API endpoint
    API_ENDPOINT: process.env.NEXT_PUBLIC_SAMBANOVA_API_ENDPOINT || 'https://api.sambanova.ai/v1/chat/completions',
    
    // Default model for mental health counseling
    DEFAULT_MODEL: 'Meta-Llama-3.1-70B-Instruct',
    
    // Chat parameters
    PARAMETERS: {
      max_tokens: 500,
      temperature: 0.7,
      top_p: 0.95,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
    
    // System prompt to guide the model's behavior for mental health conversations
    SYSTEM_PROMPT: `You are an empathetic mental health assistant designed to provide supportive conversations. 
    Your responses should be compassionate, non-judgmental, and focused on the user's wellbeing.
    Always prioritize user safety and encourage professional help when appropriate.
    Avoid giving medical diagnoses or specific treatment plans.
    Instead, focus on listening, validating feelings, and suggesting general coping strategies.`,
  };
  
  // Helper to format messages for the API
  export const formatMessagesForAPI = (messages: any[], systemPrompt = SAMBANOVA_CONFIG.SYSTEM_PROMPT) => {
    return [
      { role: 'system', content: systemPrompt },
      ...messages
    ];
  };
  
  // Helper to convert Langchain formatted messages to SambaNova API format
  export const convertLangchainToSambaNova = (langchainMessages: any[]) => {
    return langchainMessages.map(msg => {
      // Map Langchain roles to SambaNova API roles
      let role = msg.type;
      if (role === 'human') role = 'user';
      if (role === 'ai') role = 'assistant';
      
      return {
        role: role,
        content: msg.content
      };
    });
  };
  
  // Create a session ID generator
  export const generateSessionId = () => {
    return `session_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
  };