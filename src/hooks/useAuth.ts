
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from './use-toast';
import { Session, User } from '@supabase/supabase-js';

// Test credentials for easy login:
// Email: test@example.com
// Password: Test123456

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);

        if (event === 'SIGNED_IN') {
          const userName = currentSession?.user?.user_metadata?.full_name || 'User';
          toast({
            title: "Login Successful",
            description: `Welcome back, ${userName}!`
          });
        } else if (event === 'SIGNED_OUT') {
          toast({
            title: "Signed Out",
            description: "You have been signed out successfully."
          });
        }
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [toast]);

  const signUp = async (email: string, password: string, userData: { full_name: string }) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData
        }
      });

      if (error) throw error;
      
      toast({
        title: "Registration Successful",
        description: "Welcome to teko.sup! Please check your email to confirm your account."
      });
      
      return { success: true };
    } catch (error: any) {
      console.error('Error signing up:', error);
      return { 
        success: false, 
        error: error.message || 'An error occurred during signup' 
      };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      return { success: true };
    } catch (error: any) {
      console.error('Error signing in:', error);
      return { 
        success: false, 
        error: error.message || 'Invalid login credentials' 
      };
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { success: true };
    } catch (error: any) {
      console.error('Error signing out:', error);
      return { 
        success: false, 
        error: error.message || 'An error occurred during sign out' 
      };
    }
  };

  return {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut
  };
}
