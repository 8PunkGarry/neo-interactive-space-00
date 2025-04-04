
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, LogIn, Mail, Lock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useAuthContext } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { signIn } = useAuthContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsSubmitting(true);
      console.log('Login data:', data);
      
      const result = await signIn(data.email, data.password);
      
      if (!result.success) {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: result.error || "Please check your credentials and try again.",
        });
        return;
      }
      
      // Redirect to home page after successful login
      setTimeout(() => navigate('/'), 1000);
    } catch (error) {
      console.error('Login error:', error);
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Please check your credentials and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-teko-black">
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative">
        {/* Background elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-teko-purple/20 rounded-full blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teko-purple/30 rounded-full blur-3xl opacity-50 animate-float"></div>
        
        <div className="w-full max-w-md z-10">
          <Link to="/" className="inline-flex items-center text-teko-white/70 hover:text-teko-purple mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('nav.back')}
          </Link>
          
          <Card className="backdrop-blur-xl bg-teko-black/40 border border-teko-purple/20">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold purple-gradient-text">
                {t('auth.login')}
              </CardTitle>
              <CardDescription className="text-teko-white/70">
                {t('auth.login_description')}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-teko-white/90">{t('auth.email')}</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-teko-white/50" />
                            <Input
                              placeholder="you@example.com"
                              className="pl-10 bg-teko-black/60 border-teko-purple/30 text-teko-white"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-teko-white/90">{t('auth.password')}</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-teko-white/50" />
                            <Input
                              type="password"
                              placeholder="••••••••"
                              className="pl-10 bg-teko-black/60 border-teko-purple/30 text-teko-white"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex items-center justify-between">
                    <FormField
                      control={form.control}
                      name="rememberMe"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="data-[state=checked]:bg-teko-purple"
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-medium text-teko-white/70 cursor-pointer">
                            {t('auth.remember_me')}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    
                    <Link to="/forgot-password" className="text-sm text-teko-purple hover:text-teko-purple-light">
                      {t('auth.forgot_password')}
                    </Link>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-teko-purple hover:bg-teko-purple-dark text-white" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <span className="mr-2">{t('auth.logging_in')}</span>
                        <div className="h-4 w-4 border-2 border-teko-white/50 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    ) : (
                      <>
                        <LogIn className="mr-2 h-4 w-4" />
                        {t('auth.login')}
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <div className="relative w-full">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-teko-purple/20"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-card px-2 text-teko-white/50">{t('auth.or')}</span>
                </div>
              </div>
              
              <div className="text-center text-sm text-teko-white/70">
                {t('auth.no_account')}{' '}
                <Link 
                  to="/signup" 
                  className="text-teko-purple hover:text-teko-purple-light font-medium"
                >
                  {t('auth.create_account')}
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
