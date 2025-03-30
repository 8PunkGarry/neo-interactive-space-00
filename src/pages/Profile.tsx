
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Settings, MessageCircle, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

const Profile = () => {
  const { user, loading, signOut } = useAuthContext();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // If not loading and no user is found, redirect to login
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    const result = await signOut();
    if (result.success) {
      navigate('/');
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error || "Failed to sign out"
      });
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
  if (!user) return null;

  const getInitials = () => {
    const fullName = user.user_metadata.full_name || '';
    return fullName
      .split(' ')
      .map(name => name.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="min-h-screen flex flex-col bg-teko-black text-teko-white">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              {language === 'ru' ? 'Ваш профиль' : 
               language === 'cs' ? 'Váš profil' :
               'Your Profile'}
            </h1>

            <Card className="bg-teko-dark-gray border-teko-purple/20 mb-8">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-20 w-20 border-2 border-teko-purple">
                  <AvatarFallback className="bg-teko-purple/80 text-teko-white text-xl">
                    {getInitials()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl text-teko-white">
                    {user.user_metadata.full_name || 'User'}
                  </CardTitle>
                  <CardDescription className="text-teko-white/70">
                    {user.email}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Button 
                    variant="outline"
                    className="flex items-center gap-2 border-teko-purple/30 hover:bg-teko-purple/10 text-teko-white"
                    onClick={() => navigate('/settings')}
                  >
                    <Settings className="h-4 w-4" />
                    {language === 'ru' ? 'Настройки' : 
                     language === 'cs' ? 'Nastavení' :
                     'Settings'}
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="flex items-center gap-2 border-teko-purple/30 hover:bg-teko-purple/10 text-teko-white"
                    onClick={() => navigate('/chat')}
                  >
                    <MessageCircle className="h-4 w-4" />
                    {language === 'ru' ? 'Перейти в чат' : 
                     language === 'cs' ? 'Přejít do chatu' :
                     'Go to Chat'}
                  </Button>
                </div>

                <div className="pt-4 border-t border-teko-purple/20">
                  <Button 
                    variant="outline" 
                    className="w-full text-red-400 hover:text-red-300 hover:bg-red-900/20 border-red-900/30"
                    onClick={handleSignOut}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    {language === 'ru' ? 'Выйти из аккаунта' : 
                     language === 'cs' ? 'Odhlásit se' :
                     'Sign Out'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-teko-white/60 text-sm">
              {language === 'ru' ? 'Вы зарегистрировались с email-адресом' : 
               language === 'cs' ? 'Zaregistrovali jste se s e-mailovou adresou' :
               'You registered with email'}: {user.email}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
