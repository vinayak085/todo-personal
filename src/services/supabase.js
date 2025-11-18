import { createClient } from "@supabase/supabase-js";

export const supabaseurl = "https://mdziucziuksusxwbhoee.supabase.co";
const supabasekey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1keml1Y3ppdWtzdXN4d2Job2VlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5MzU3NTEsImV4cCI6MjA3ODUxMTc1MX0.x1mpyt2E9zTz82LBR-sTS4_0V2x0TSB7F3rmM0E_Yog";

const supabase = createClient(supabaseurl,supabasekey);

export default supabase;