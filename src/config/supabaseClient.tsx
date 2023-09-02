import { createClient } from '@supabase/supabase-js'
import { Database } from '@/schemas/schema'
const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_APP_ANON_KEY
const supabase = createClient<Database>(supabaseUrl, supabaseKey)

export default supabase
