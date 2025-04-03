
import React, { createContext, useContext, ReactNode } from 'react';
import { supabaseExtended } from '@/integrations/supabase/client-extended';
import { ExtendedSupabaseClient } from '@/types/supabase-extensions';

// Create context for the extended supabase client
const SupabaseContext = createContext<ExtendedSupabaseClient | undefined>(undefined);

export function SupabaseProvider({ children }: { children: ReactNode }) {
  return (
    <SupabaseContext.Provider value={supabaseExtended}>
      {children}
    </SupabaseContext.Provider>
  );
}

export function useSupabase() {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
}
