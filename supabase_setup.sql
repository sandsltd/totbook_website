-- Create profiles table for users
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create downloads table
CREATE TABLE IF NOT EXISTS downloads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  device_type TEXT CHECK (device_type IN ('ios', 'android', 'web')),
  version TEXT,
  downloaded_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  status TEXT CHECK (status IN ('trialing', 'active', 'cancelled', 'expired')),
  plan_type TEXT CHECK (plan_type IN ('free', 'pro', 'premium')),
  trial_ends_at TIMESTAMP WITH TIME ZONE,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  ended_at TIMESTAMP WITH TIME ZONE
);

-- Create activity_logs table
CREATE TABLE IF NOT EXISTS activity_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  user_email TEXT,
  action TEXT,
  status TEXT CHECK (status IN ('success', 'pending', 'failed')),
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_downloads_user_id ON downloads(user_id);
CREATE INDEX IF NOT EXISTS idx_downloads_downloaded_at ON downloads(downloaded_at);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_activity_logs_user_id ON activity_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_activity_logs_created_at ON activity_logs(created_at);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;

-- Create policies for service role (admin) access
CREATE POLICY "Service role can view all profiles" ON profiles
  FOR SELECT USING (auth.role() = 'service_role');

CREATE POLICY "Service role can view all downloads" ON downloads
  FOR SELECT USING (auth.role() = 'service_role');

CREATE POLICY "Service role can view all subscriptions" ON subscriptions
  FOR SELECT USING (auth.role() = 'service_role');

CREATE POLICY "Service role can view all activity_logs" ON activity_logs
  FOR SELECT USING (auth.role() = 'service_role');

-- Create a function to automatically create a profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert sample data (optional - remove if you have real data)
-- Sample users
INSERT INTO profiles (id, email, full_name, created_at)
VALUES 
  ('550e8400-e29b-41d4-a716-446655440001', 'john@example.com', 'John Doe', NOW() - INTERVAL '30 days'),
  ('550e8400-e29b-41d4-a716-446655440002', 'sarah@example.com', 'Sarah Smith', NOW() - INTERVAL '25 days'),
  ('550e8400-e29b-41d4-a716-446655440003', 'mike@example.com', 'Mike Johnson', NOW() - INTERVAL '20 days')
ON CONFLICT (id) DO NOTHING;

-- Sample downloads
INSERT INTO downloads (user_id, device_type, version)
VALUES 
  ('550e8400-e29b-41d4-a716-446655440001', 'ios', '1.0.0'),
  ('550e8400-e29b-41d4-a716-446655440002', 'android', '1.0.0'),
  ('550e8400-e29b-41d4-a716-446655440003', 'web', '1.0.0');

-- Sample subscriptions
INSERT INTO subscriptions (user_id, status, plan_type)
VALUES 
  ('550e8400-e29b-41d4-a716-446655440001', 'active', 'pro'),
  ('550e8400-e29b-41d4-a716-446655440002', 'trialing', 'premium'),
  ('550e8400-e29b-41d4-a716-446655440003', 'active', 'pro');

-- Sample activity logs
INSERT INTO activity_logs (user_id, user_email, action, status)
VALUES 
  ('550e8400-e29b-41d4-a716-446655440001', 'john@example.com', 'Started Trial', 'success'),
  ('550e8400-e29b-41d4-a716-446655440002', 'sarah@example.com', 'Downloaded App', 'success'),
  ('550e8400-e29b-41d4-a716-446655440003', 'mike@example.com', 'Upgraded to Pro', 'success');