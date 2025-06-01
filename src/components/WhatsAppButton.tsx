
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Chat with us on WhatsApp</span>
      </button>
      <div className="absolute bottom-full right-0 mb-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
        Live Chat with Experts
      </div>
    </div>
  );
};

export default WhatsAppButton;
