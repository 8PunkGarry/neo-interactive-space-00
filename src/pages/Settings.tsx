
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Monitor } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Settings = () => {
  const { user, loading } = useAuthContext();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    // If not loading and no user is found, redirect to login
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

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

  // If no user after loading, component will redirect
  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col bg-teko-black text-teko-white">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Button 
              variant="ghost" 
              className="mb-6 text-teko-white/70 hover:text-teko-purple"
              onClick={() => navigate('/profile')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === 'ru' ? 'Назад к профилю' : 
               language === 'cs' ? 'Zpět na profil' :
               'Back to Profile'}
            </Button>

            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              {language === 'ru' ? 'Настройки' : 
               language === 'cs' ? 'Nastavení' :
               'Settings'}
            </h1>

            <Card className="bg-teko-dark-gray border-teko-purple/20 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-teko-purple" />
                  {language === 'ru' ? 'Настройки интерфейса' : 
                   language === 'cs' ? 'Nastavení rozhraní' :
                   'Interface Settings'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">
                    {language === 'ru' ? 'Язык' : 
                     language === 'cs' ? 'Jazyk' :
                     'Language'}
                  </h3>
                  <RadioGroup 
                    value={language} 
                    onValueChange={(value) => setLanguage(value as 'en' | 'ru' | 'cs')}
                    className="flex flex-col space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="en" id="en" className="border-teko-purple text-teko-purple" />
                      <Label htmlFor="en" className="cursor-pointer">English</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ru" id="ru" className="border-teko-purple text-teko-purple" />
                      <Label htmlFor="ru" className="cursor-pointer">Русский</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cs" id="cs" className="border-teko-purple text-teko-purple" />
                      <Label htmlFor="cs" className="cursor-pointer">Čeština</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
