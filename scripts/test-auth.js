const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://dlxuhdbdvpxwgjrwyeup.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRseHVoZGJkdnB4d2dqcnd5ZXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMjMyMzQsImV4cCI6MjA2Njc5OTIzNH0.5XBAu_jNWgP44PUHy9oz1DLJKu85hwS-fWC7fv3NSwg';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testAuth() {
  console.log('Testing Supabase authentication...\n');
  
  try {
    // Test login with your email
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'hello@saunders-simmons.co.uk',
      password: 'your_password_here' // You'll need to replace this
    });

    if (error) {
      console.log('Auth error:', error.message);
      console.log('Error code:', error.code);
      console.log('Full error:', error);
    } else {
      console.log('Login successful!');
      console.log('User:', data.user?.email);
    }

    // Check if we can access the database
    const { data: profiles, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .limit(1);

    if (profileError) {
      console.log('\nDatabase error:', profileError.message);
    } else {
      console.log('\nDatabase connection successful');
      console.log('Can access profiles table');
    }

  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

testAuth();