import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://dikzynlokhvyulyvsjdz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpa3p5bmxva2h2eXVseXZzamR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0NzExMzYsImV4cCI6MjA1NDA0NzEzNn0.tl_ED-c1QTFL3uDS3ZNsFsIgctVf0dYhRKCWfNtdEiU')