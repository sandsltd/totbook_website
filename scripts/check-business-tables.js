const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://dlxuhdbdvpxwgjrwyeup.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRseHVoZGJkdnB4d2dqcnd5ZXVwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTIyMzIzNCwiZXhwIjoyMDY2Nzk5MjM0fQ.xKp_UtzmOTy4PHtm-CIkZkG5ojG7qaW3mBbTZNPExhc';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkBusiness() {
  console.log('Checking business-related tables...\n');
  
  try {
    // Check for business/businesses table
    const businessTables = ['business', 'businesses', 'business_profiles', 'organisations', 'organizations', 'companies'];
    
    for (const tableName of businessTables) {
      try {
        const { data, error, count } = await supabase
          .from(tableName)
          .select('*', { count: 'exact' })
          .limit(1);
        
        if (!error) {
          console.log(`✓ Found table: ${tableName} (${count} records)`);
          if (data && data.length > 0) {
            console.log(`  Columns: ${Object.keys(data[0]).join(', ')}`);
            console.log(`  Sample:`, data[0]);
          }
        }
      } catch (e) {
        // Table doesn't exist
      }
    }

    // Check profiles table for business info
    console.log('\nChecking profiles for business fields...');
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .limit(1)
      .single();
    
    if (profile) {
      console.log('Profile columns:', Object.keys(profile).join(', '));
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

checkBusiness();