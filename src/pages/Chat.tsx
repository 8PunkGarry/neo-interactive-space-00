
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MessageCircle, LogIn, User } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAuthContext } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import ChatInterface from '@/components/ChatInterface';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Chat = () => {
  const { t, language } = useLanguage();
  const { user, loading } = useAuthContext();
  const navigate = useNavigate();
  
  // If loading is done and user is not authenticated, redirect to login
  useEffect(() => {
    if (!loading && !user) {
      navigate('/login', { state: { from: '/chat' } });
    }
  }, [user, loading, navigate]);
  
  const getAuthMessage = () => {
    if (language === 'ru') {
      return 'Для доступа к чату, пожалуйста, войдите в аккаунт или зарегистрируйтесь';
    } else if (language === 'cs') {
      return 'Pro přístup k chatu se prosím přihlaste nebo zaregistrujte';
    } else {
      return 'To access the chat, please sign in or create an account';
    }
  };

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-teko-black text-teko-white">
        <Navbar />
        <main className="flex-grow pt-28 pb-16 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-teko-purple/30 border-t-teko-purple rounded-full animate-spin"></div>
        </main>
        <Footer />
      </div>
    );
  }

  // If no user after loading, component will redirect (handled in useEffect)
  if (!user) {
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
              
              <div className="space-y-8">
                <p className="text-xl text-teko-white/80 mb-6">
                  {getAuthMessage()}
                </p>
                
                <Card className="bg-teko-dark-gray border-teko-purple/20">
                  <CardHeader>
                    <CardTitle className="text-teko-white text-2xl">
                      {language === 'ru' ? 'Требуется аутентификация' : 
                       language === 'cs' ? 'Vyžaduje se ověření' :
                       'Authentication Required'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="p-6 space-y-6">
                      <div className="flex justify-center">
                        <div className="p-4 rounded-full bg-teko-purple/20">
                          <User size={48} className="text-teko-purple" />
                        </div>
                      </div>
                      <p className="text-lg text-teko-white/70">
                        {language === 'ru' ? 'Чат доступен только для зарегистрированных пользователей' : 
                         language === 'cs' ? 'Chat je k dispozici pouze pro registrované uživatele' :
                         'Chat is only available for registered users'}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex-col space-y-2">
                    <div className="flex gap-4 w-full justify-center">
                      <Link to="/login">
                        <Button variant="outline" className="text-teko-white border-teko-purple/40 hover:bg-teko-purple/10">
                          <LogIn className="mr-2 h-4 w-4" />
                          {t('auth.login')}
                        </Button>
                      </Link>
                      <Link to="/signup">
                        <Button className="bg-teko-purple hover:bg-teko-purple-dark text-white">
                          <User className="mr-2 h-4 w-4" />
                          {t('auth.signup')}
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-teko-black text-teko-white">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <MessageCircle size={64} className="text-teko-purple" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
              {language === 'ru' ? 'Чат поддержки' : 
               language === 'cs' ? 'Chat podpory' : 
               'Support Chat'}
            </h1>
            
            <ChatInterface />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chat;
