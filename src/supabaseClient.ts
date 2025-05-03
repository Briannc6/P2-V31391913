import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://hfncdldcnoasskotydod.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmNkbGRjbm9hc3Nrb3R5ZG9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyNDkyNzcsImV4cCI6MjA2MTgyNTI3N30.S9oNtwOqDEDBEfTBv53A613qG_PRFBldZueKDYHtZf4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);