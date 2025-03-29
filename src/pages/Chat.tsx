
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Chat = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col bg-teko-black text-teko-white">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <MessageCircle size={64} className="text-teko-purple" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('navbar.chat')}</h1>
            <p className="text-xl text-teko-white/80 mb-10">
              This is the chat page. You can start a conversation with us here.
            </p>
            <div className="bg-teko-dark-gray p-6 rounded-lg">
              <p className="text-lg text-teko-white/70 mb-4">
                Chat functionality coming soon!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chat;
