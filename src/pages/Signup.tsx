
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, UserPlus, Mail, Lock, User } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
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

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Password must be at least 6 characters'),
  terms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupFormValues = z.infer<typeof signupSchema>;

const Signup = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  });

  const onSubmit = async (data: SignupFormValues) => {
    try {
      console.log('Signup data:', data);
      // Here we would handle actual signup logic with API calls
      
      // Simulate successful signup
      toast({
        title: "Account Created",
        description: "Welcome to teko.sup! Your account has been created successfully.",
      });
      
      // Redirect to home page after successful signup
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        variant: "destructive",
        title: "Signup Failed",
        description: "There was an error creating your account. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-teko-black">
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative">
        {/* Background elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-teko-purple/20 rounded-full blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teko-purple/30 rounded-full blur-3xl opacity-50 animate-float"></div>
        
        <div className="w-full max-w-md z-10">
          <Link to="/" className="inline-flex items-center text-teko-white/70 hover:text-teko-purple mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('nav.back')}
          </Link>
          
          <Card className="backdrop-blur-xl bg-teko-black/40 border border-teko-purple/20">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold purple-gradient-text">
                {t('auth.create_account')}
              </CardTitle>
              <CardDescription className="text-teko-white/70">
                {t('auth.signup_description')}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-teko-white/90">{t('auth.full_name')}</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-teko-white/50" />
                            <Input
                              placeholder="John Doe"
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
                  
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-teko-white/90">{t('auth.confirm_password')}</FormLabel>
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
                  
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-teko-purple"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-medium text-teko-white/70">
                            {t('auth.agree_terms')}{' '}
                            <Link to="/terms" className="text-teko-purple hover:text-teko-purple-light">
                              {t('auth.terms')}
                            </Link>{' '}
                            {t('auth.and')}{' '}
                            <Link to="/privacy" className="text-teko-purple hover:text-teko-purple-light">
                              {t('auth.privacy')}
                            </Link>
                          </FormLabel>
                        </div>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-teko-purple hover:bg-teko-purple-dark text-white" 
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <div className="flex items-center">
                        <span className="mr-2">{t('auth.creating_account')}</span>
                        <div className="h-4 w-4 border-2 border-teko-white/50 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    ) : (
                      <>
                        <UserPlus className="mr-2 h-4 w-4" />
                        {t('auth.create_account')}
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
                {t('auth.have_account')}{' '}
                <Link 
                  to="/login" 
                  className="text-teko-purple hover:text-teko-purple-light font-medium"
                >
                  {t('auth.login')}
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

export default Signup;
