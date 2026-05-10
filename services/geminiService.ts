import { GoogleGenAI } from "@google/genai";
import { GDSC_SYSTEM_INSTRUCTION } from '../constants';

// Initialize the client
// Note: In a production app, you might proxy this through a backend to protect the key,
// but for this frontend-only demo, we use the env variable directly as requested.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const chatWithGemini = async (userMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Configuration Error: API Key is missing. Please set process.env.API_KEY.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: GDSC_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the GDSC knowledge base right now.";
  }
};
