
import { createClient } from '@supabase/supabase-js';
import type { ExtendedDatabase } from '@/types/supabase-extensions';

const SUPABASE_URL = "https://naetbldqffksrprcinwq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hZXRibGRxZmZrc3JwcmNpbndxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMjQ5ODEsImV4cCI6MjA1ODYwMDk4MX0.rHAcWRVA4_k3aC-5dy9SGLfHn9W-PP_3MJsW5RSrEEo";

// Extended supabase client that includes chat_messages table types
export const supabaseExtended = createClient<ExtendedDatabase>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
