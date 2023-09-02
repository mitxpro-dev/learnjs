export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Challenges: {
        Row: {
          author: string | null
          challenges: Json | null
          created_at: string | null
          description: string | null
          difficulty: number | null
          image: string | undefined
          markdown: string | null
          name: string | undefined
          published: boolean | null
          slug: string
        }
        Insert: {
          author?: string | null
          challenges?: Json | null
          created_at?: string | null
          description?: string | null
          difficulty?: number | null
          image?: string | null
          markdown?: string | null
          name?: string | null
          published?: boolean | null
          slug: string
        }
        Update: {
          author?: string | null
          challenges?: Json | null
          created_at?: string | null
          description?: string | null
          difficulty?: number | null
          image?: string | null
          markdown?: string | null
          name?: string | null
          published?: boolean | null
          slug?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
