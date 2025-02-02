import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://rduihiqxzggscvyaafrm.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkdWloaXF4emdnc2N2eWFhZnJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0NzA0NDMsImV4cCI6MjA1NDA0NjQ0M30._q0fNOWBJBwo7wp2wtcyUco0bDPorhjTiQZKntOkzT8')