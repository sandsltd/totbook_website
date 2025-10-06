const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://dlxuhdbdvpxwgjrwyeup.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRseHVoZGJkdnB4d2dqcnd5ZXVwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTIyMzIzNCwiZXhwIjoyMDY2Nzk5MjM0fQ.xKp_UtzmOTy4PHtm-CIkZkG5ojG7qaW3mBbTZNPExhc';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testStats() {
  console.log('Testing database queries...\n');
  
  try {
    // Test profiles
    const { data: profiles, count: profileCount, error: profileError } = await supabase
      .from('profiles')
      .select('*', { count: 'exact' });
    
    console.log('Profiles:', profileError ? `Error: ${profileError.message}` : `${profileCount} records`);
    if (profiles && profiles.length > 0) {
      console.log('Sample profile:', profiles[0]);
    }

    // Test customers
    const { data: customers, count: customerCount, error: customerError } = await supabase
      .from('customers')
      .select('*', { count: 'exact' });
    
    console.log('Customers:', customerError ? `Error: ${customerError.message}` : `${customerCount} records`);

    // Test other tables
    const tables = ['app_downloads', 'subscriptions', 'trials'];
    for (const table of tables) {
      const { count, error } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true });
      
      console.log(`${table}:`, error ? `Error: ${error.message}` : `${count} records`);
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

testStats();