import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, ArrowRight, Bot } from 'lucide-react';
import { chatWithGemini } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';

const AiChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: ChatRole.MODEL, text: "Greetings. I am the GDSC Assistant. How may I help you navigate our community?" }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: ChatRole.USER, text: userMsg }]);
        setIsLoading(true);

        const response = await chatWithGemini(userMsg);

        setMessages(prev => [...prev, { role: ChatRole.MODEL, text: response }]);
        setIsLoading(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
                {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
            </button>

            <div className={`fixed bottom-28 right-8 z-40 w-[360px] bg-paper border border-border shadow-2xl transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                <div className="p-4 border-b border-border flex items-center gap-3 bg-surface">
                    <Bot className="w-4 h-4 text-google-blue" />
                    <span className="font-mono text-xs uppercase tracking-widest text-gray-400">Assistant_v2.5</span>
                </div>

                <div className="h-96 overflow-y-auto p-6 space-y-6">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex flex-col ${msg.role === ChatRole.USER ? 'items-end' : 'items-start'}`}>
                            <span className="font-mono text-[10px] text-gray-600 mb-1 uppercase">{msg.role}</span>
                            <div className={`max-w-[90%] text-sm leading-relaxed ${
                                msg.role === ChatRole.USER 
                                    ? 'text-white font-medium' 
                                    : 'text-gray-400 font-light'
                            }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex gap-1 h-4 items-center">
                            <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></div>
                            <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-75"></div>
                            <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="p-4 border-t border-border bg-surface">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Type your query..."
                            className="flex-1 bg-transparent text-sm font-mono text-white placeholder:text-gray-700 focus:outline-none"
                        />
                        <button 
                            onClick={handleSend}
                            disabled={isLoading || !input.trim()}
                            className="text-white disabled:opacity-30 hover:text-google-blue transition-colors"
                        >
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AiChat;