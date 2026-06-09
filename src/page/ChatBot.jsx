import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', text: 'Hi! I am your AI Mentor. How can I help you shape your career path today?' }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message
    setChatHistory([...chatHistory, { sender: 'user', text: message }]);
    setMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      setChatHistory(prev => [...prev, { sender: 'bot', text: 'I understand! I am here to help you achieve your goals.' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[320px] h-[400px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#3fb067] to-[#8ccf32] p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-bold text-sm">Matcha AI Mentor</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-md transition">
              <X className="w-4 h-4" />
            </button>
          </div>
          
          {/* Chat History */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-gray-50">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`max-w-[80%] p-3 rounded-2xl text-sm ${chat.sender === 'user' ? 'bg-[#e5f8ec] text-gray-800 self-end rounded-br-sm' : 'bg-white border border-gray-100 text-gray-800 self-start rounded-bl-sm shadow-sm'}`}>
                {chat.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything..." 
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#3fb067] transition"
            />
            <button type="submit" className="bg-[#3fb067] text-white p-2 rounded-full hover:bg-[#35a95b] transition flex-shrink-0">
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-br from-[#1b5e3a] to-[#268a52] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(27,94,58,0.4)] hover:scale-105 transition-all duration-300 relative group ${isOpen ? 'rotate-90 scale-0 opacity-0 absolute' : 'rotate-0 scale-100 opacity-100'}`}
      >
        <MessageCircle className="w-6 h-6 text-[#aee449]" />
        {/* Glowing ring effect */}
        <span className="absolute w-full h-full rounded-full border border-[#aee449] animate-ping opacity-30"></span>
      </button>

    </div>
  );
}
