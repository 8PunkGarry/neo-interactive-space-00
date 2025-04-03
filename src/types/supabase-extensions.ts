
import { Database as OriginalDatabase } from '@/integrations/supabase/types';

// Extend the original Database type with our new tables
export interface ExtendedDatabase extends OriginalDatabase {
  public: {
    Tables: {
      briefs: OriginalDatabase['public']['Tables']['briefs'];
      profiles: OriginalDatabase['public']['Tables']['profiles'];
      chat_messages: {
        Row: {
          id: string;
          sender_id: string;
          recipient_id: string | null;
          content: string;
          is_read: boolean | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          sender_id: string;
          recipient_id?: string | null;
          content: string;
          is_read?: boolean | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          sender_id?: string;
          recipient_id?: string | null;
          content?: string;
          is_read?: boolean | null;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "chat_messages_recipient_id_fkey";
            columns: ["recipient_id"];
            isOneToOne: false;
            referencedRelation: "admin_users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "chat_messages_sender_id_fkey";
            columns: ["sender_id"];
            isOneToOne: false;
            referencedRelation: "admin_users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: OriginalDatabase['public']['Views'];
    Functions: OriginalDatabase['public']['Functions'];
    Enums: OriginalDatabase['public']['Enums'];
    CompositeTypes: OriginalDatabase['public']['CompositeTypes'];
  };
}

// Export an extended supabase client type
export type ExtendedSupabaseClient = {
  from<Table extends keyof ExtendedDatabase['public']['Tables']>(
    table: Table
  ): any;
} & { [key: string]: any };
