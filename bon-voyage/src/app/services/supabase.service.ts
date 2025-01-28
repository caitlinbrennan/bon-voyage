import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() { 
    const supabaseUrl = 'https://aoesmwcahajxuceweegh.supabase.co'
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvZXNtd2NhaGFqeHVjZXdlZWdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NTUzNTIsImV4cCI6MjA1MzAzMTM1Mn0.5VS7oPNphGRA-naaxCcUSvocQ_5ozh4-R68m4Bxswqw';

    this.supabase = createClient(supabaseUrl, supabaseAnonKey);
  }

  async getData(tablename: string) {
    const { data, error } = await this.supabase.from(tablename).select('*');
    if (error) {
      console.error('Error fetching data:', error);
    }
    return data;
  }
}
