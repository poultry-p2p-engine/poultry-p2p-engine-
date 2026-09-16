// ========================================================
// SUPABASE CLIENT INITIALIZATION
// Handles live database connection and authentication states.
// ========================================================
import { createClient } from '@supabase/supabase-js';

// Retrieve credentials from environment variables (configured later in Cloudflare)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Instantiate the single-instance Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
