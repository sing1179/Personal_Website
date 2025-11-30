import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY || '';

// Initialize client
// Note: In a real production app, you might proxy this through a backend to hide the key,
// or use a secure way to inject it. For this demo, we assume process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey });

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string) => {
  const chat = getChatSession();
  
  try {
    const streamResult = await chat.sendMessageStream({ message });
    return streamResult;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw error;
  }
};
