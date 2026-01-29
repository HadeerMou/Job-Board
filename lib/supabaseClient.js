import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://alkmgkwolfevddhejxrr.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsa21na3dvbGZldmRkaGVqeHJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1OTMxNzYsImV4cCI6MjA4NTE2OTE3Nn0.dErR4fePZVS-_h-sjYttwFtD3DSu-XQwa24V56iEfxI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
