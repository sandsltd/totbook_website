const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://dlxuhdbdvpxwgjrwyeup.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRseHVoZGJkdnB4d2dqcnd5ZXVwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTIyMzIzNCwiZXhwIjoyMDY2Nzk5MjM0fQ.xKp_UtzmOTy4PHtm-CIkZkG5ojG7qaW3mBbTZNPExhc';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkDatabase() {
  console.log('Connecting to Supabase database...\n');
  
  try {
    // Get all tables in the public schema
    const { data: tables, error: tablesError } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public');

    if (tablesError) {
      // Try alternative approach - list tables by attempting to query them
      console.log('Checking for common table names...\n');
      
      const commonTables = [
        'users', 'profiles', 'customers', 'subscriptions', 
        'downloads', 'app_downloads', 'trials', 'payments',
        'activity', 'activity_logs', 'events', 'analytics'
      ];
      
      for (const tableName of commonTables) {
        try {
          const { data, error, count } = await supabase
            .from(tableName)
            .select('*', { count: 'exact', head: true });
          
          if (!error) {
            console.log(`✓ Found table: ${tableName} (${count || 0} rows)`);
            
            // Get column info
            const { data: sample } = await supabase
              .from(tableName)
              .select('*')
              .limit(1);
            
            if (sample && sample.length > 0) {
              console.log(`  Columns: ${Object.keys(sample[0]).join(', ')}`);
            }
          }
        } catch (e) {
          // Table doesn't exist, continue
        }
      }
    } else if (tables) {
      console.log('Found tables in database:\n');
      tables.forEach(table => {
        console.log(`- ${table.table_name}`);
      });
    }

    // Check auth.users table
    console.log('\n--- Checking auth.users ---');
    const { data: users, error: usersError, count: userCount } = await supabase.auth.admin.listUsers();
    if (!usersError) {
      console.log(`Found ${users.users.length} users in auth.users`);
      if (users.users.length > 0) {
        console.log('Sample user structure:', Object.keys(users.users[0]).filter(k => k !== 'id'));
      }
    }

  } catch (error) {
    console.error('Error checking database:', error);
  }
}

checkDatabase();