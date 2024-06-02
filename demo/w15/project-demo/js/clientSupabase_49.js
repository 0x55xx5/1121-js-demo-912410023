const SUPABASE_URL = 'https://xugapzykjhiovsvncplz.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1Z2Fwenlramhpb3Zzdm5jcGx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwNDEwNzUsImV4cCI6MjAyOTYxNzA3NX0.I-i3TZBM4Pb62i1xNUTZecHt9Qtwsi85Do8nH4DmKyg';

export const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
