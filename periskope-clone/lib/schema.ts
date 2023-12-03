export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      whatsappGroups: {
        Row: {
          id: number;
          created_at: string;
          groupName: string | null;
          projects: string | null;
          noOfMembers: number;
          lastActive: string;
        };
        Insert: {
          id?: number;
          created_at?: string;
          groupName?: string | null;
          projects?: string | null;
          noOfMembers?: number;
          lastActive?: string;
        };
        Update: {
          id?: number;
          created_at?: string;
          groupName?: string | null;
          projects?: string | null;
          noOfMembers?: number;
          lastActive?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
