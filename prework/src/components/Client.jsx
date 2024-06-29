import { createClient } from '@supabase/supabase-js'
//You need to import the client from supabase by remembering this syntax.
//This part can be copy - pasted as it is short and easily memberable.

const supabaseUrl = import.meta.env.VITE_REACT_APP_URL
const supabaseKey = import.meta.env.VITE_REACT_APP_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey)