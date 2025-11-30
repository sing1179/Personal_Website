import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from '@google/genai';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: "Hi! I'm Veer's AI assistant. Ask me anything about his work, experience, or what he's currently reading." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const stream = await sendMessageToGemini(userMsg.text);
      
      const botMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: '', isStreaming: true }]);

      let fullText = '';
      
      for await (const chunk of stream) {
        const c = chunk as GenerateContentResponse;
        const text = c.text;
        if (text) {
          fullText += text;
          setMessages(prev => 
            prev.map(msg => 
              msg.id === botMsgId 
                ? { ...msg, text: fullText } 
                : msg
            )
          );
        }
      }
      
      setMessages(prev => 
        prev.map(msg => 
          msg.id === botMsgId 
            ? { ...msg, isStreaming: false } 
            : msg
        )
      );

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: "Sorry, I'm having trouble connecting right now. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div 
        className={`
          pointer-events-auto bg-white border border-neutral-200 shadow-2xl rounded-sm w-80 sm:w-96 overflow-hidden transition-all duration-300 origin-bottom-right
          ${isOpen ? 'opacity-100 scale-100 mb-4' : 'opacity-0 scale-95 h-0 mb-0'}
        `}
      >
        {/* Header */}
        <div className="bg-neutral-900 text-white p-4 flex justify-between items-center border-b-2 border-primary-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div>
            <span className="font-medium text-sm font-mono tracking-wide">VEER'S AI ASSISTANT</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 bg-neutral-50 flex flex-col gap-3 font-sans text-sm">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`max-w-[85%] p-3 rounded-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-neutral-900 text-white self-end' 
                  : 'bg-white border border-neutral-200 text-neutral-800 self-start shadow-sm'
              }`}
            >
              {msg.text}
              {msg.isStreaming && <span className="inline-block w-1 h-4 ml-1 align-middle bg-primary-600 animate-blink"></span>}
            </div>
          ))}
          {isLoading && !messages[messages.length - 1].isStreaming && (
             <div className="self-start bg-white border border-neutral-200 p-3 rounded-sm text-neutral-400 text-xs font-mono">
                THINKING...
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-neutral-100 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Veer..."
            className="flex-1 bg-neutral-100 rounded-sm px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-600 transition-all font-mono"
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-primary-600 text-white p-2 rounded-sm hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A2.001 2.001 0 005.692 10h5.566a.75.75 0 010 1.5H5.692a2.001 2.001 0 00-1.999 1.836l-1.414 4.925a.75.75 0 00.826.95 28.898 28.898 0 0011.17-7.949.75.75 0 000-1.002A28.898 28.898 0 003.105 2.289z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          pointer-events-auto bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 hover:scale-105 transition-all duration-300
          ${isOpen ? 'rotate-90 opacity-0 pointer-events-none absolute' : 'rotate-0 opacity-100'}
        `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      </button>
    </div>
  );
};

export default ChatWidget;