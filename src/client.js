import { createClient } from "@supabase/supabase-js";

const URL = "https://pojujvbkmcoflkfgutim.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvanVqdmJrbWNvZmxrZmd1dGltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NzAwNjcsImV4cCI6MjA0NjM0NjA2N30.tP-pRBJ3l5qhjqcPNDREDMchvGf4OOY-MSPL0u8xIEQ";

export const supabase = createClient(URL, API_KEY);
