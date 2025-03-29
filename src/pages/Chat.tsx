
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Chat = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-teko-black">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-teko-white purple-gradient-text">
            Chat with Us
          </h1>
          
          <div className="bg-teko-black/50 border border-teko-purple/20 rounded-lg p-8 mb-12">
            <p className="text-teko-white/80 mb-6">
              Have questions about our services? Want to discuss your project? 
              Feel free to chat with us - we're here to help you create amazing digital experiences.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-4">
                <div className="p-4 bg-white/5 rounded-lg border border-teko-purple/20">
                  <h3 className="text-xl font-semibold mb-2 text-teko-white">Chat with Our Team</h3>
                  <p className="text-teko-white/70 mb-4">Our experts are ready to answer your questions and help you with your project.</p>
                  <a 
                    href="https://t.me/teko.sup_bot" 
                    className="inline-block px-6 py-2 bg-teko-purple text-white font-medium rounded-md hover:bg-teko-purple/90 transition-colors duration-300"
                  >
                    Start Chatting
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col space-y-4">
                <div className="p-4 bg-white/5 rounded-lg border border-teko-purple/20">
                  <h3 className="text-xl font-semibold mb-2 text-teko-white">Email Us</h3>
                  <p className="text-teko-white/70 mb-4">Send us an email and we'll get back to you as soon as possible.</p>
                  <a 
                    href="mailto:info@tekosup.com" 
                    className="inline-block px-6 py-2 bg-teko-purple text-white font-medium rounded-md hover:bg-teko-purple/90 transition-colors duration-300"
                  >
                    Email Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Chat;
