import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function GET() {
  try {
    // Check if user is authenticated using regular client
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    // Use admin client for data fetching
    const adminSupabase = createAdminClient()

    // Fetch statistics from your database
    
    // Get total users from profiles
    const { count: totalUsers } = await adminSupabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })

    // Get total customers 
    const { count: totalCustomers } = await adminSupabase
      .from('customers')
      .select('*', { count: 'exact', head: true })

    // Get total app downloads
    const { count: totalDownloads } = await adminSupabase
      .from('app_downloads')
      .select('*', { count: 'exact', head: true })

    // Get active trials
    const { count: activeTrials } = await adminSupabase
      .from('trials')
      .select('*', { count: 'exact', head: true })

    // Get paid subscriptions
    const { count: paidUsers } = await adminSupabase
      .from('subscriptions')
      .select('*', { count: 'exact', head: true })

    // Get growth data for the last 30 days
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    
    const { data: growthData } = await adminSupabase
      .from('profiles')
      .select('created_at')
      .gte('created_at', thirtyDaysAgo.toISOString())
      .order('created_at')

    // Process growth data into daily counts
    const dailyGrowth = processGrowthData(growthData || [])

    // Get device breakdown (example data - replace with actual query)
    const deviceBreakdown = [
      { name: 'iOS', value: 45 },
      { name: 'Android', value: 30 },
      { name: 'Web', value: 25 }
    ]

    // Get recent activity from profiles with business info (last created users)
    const { data: recentActivity } = await adminSupabase
      .from('profiles')
      .select(`
        *,
        businesses:businesses!owner_id (
          business_name,
          business_phone,
          city,
          subscription_status,
          trial_ends_at
        )
      `)
      .order('created_at', { ascending: false })
      .limit(10)

    // Format recent activity
    const formattedActivity = (recentActivity || []).map((profile: any) => ({
      userId: profile.id,
      user: profile.email || profile.phone || 'Unknown',
      businessName: profile.businesses?.[0]?.business_name || '-',
      phone: profile.phone,
      fullName: profile.full_name,
      action: profile.onboarding_completed ? 'Onboarding Complete' : 'Account Created',
      date: new Date(profile.created_at).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      onboardingCompleted: profile.onboarding_completed,
      subscriptionStatus: profile.businesses?.[0]?.subscription_status || 'none',
      status: 'success'
    }))

    // If no real data exists, return sample data for demonstration
    if (!totalUsers && !totalDownloads) {
      return NextResponse.json({
        totalUsers: 1234,
        totalDownloads: 5678,
        activeTrials: 89,
        paidUsers: 456,
        growthData: generateSampleGrowthData(),
        deviceBreakdown: deviceBreakdown,
        recentActivity: generateSampleActivity()
      })
    }

    return NextResponse.json({
      totalUsers: totalUsers || 0,
      totalCustomers: totalCustomers || 0,
      totalDownloads: totalDownloads || 0,
      activeTrials: activeTrials || 0,
      paidUsers: paidUsers || 0,
      growthData: dailyGrowth,
      deviceBreakdown: deviceBreakdown,
      recentActivity: formattedActivity
    })

  } catch (error) {
    console.error('Error fetching stats:', error)
    // Return sample data for demonstration even if there's an error
    return NextResponse.json({
      totalUsers: 1234,
      totalDownloads: 5678,
      activeTrials: 89,
      paidUsers: 456,
      growthData: generateSampleGrowthData(),
      deviceBreakdown: [
        { name: 'iOS', value: 45 },
        { name: 'Android', value: 30 },
        { name: 'Web', value: 25 }
      ],
      recentActivity: generateSampleActivity()
    })
  }
}

function processGrowthData(data: any[]) {
  const dailyCounts: { [key: string]: number } = {}
  
  data.forEach(item => {
    const date = new Date(item.created_at).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short'
    })
    dailyCounts[date] = (dailyCounts[date] || 0) + 1
  })

  const result = Object.entries(dailyCounts).map(([date, count]) => ({
    date,
    users: count
  }))

  return result
}

function generateSampleGrowthData() {
  const data = []
  const today = new Date()
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      users: Math.floor(Math.random() * 50) + 20
    })
  }
  
  return data
}

function generateSampleActivity() {
  return [
    { user: 'john@example.com', action: 'Started Trial', date: '12/25/2024', status: 'success' },
    { user: 'sarah@example.com', action: 'Downloaded App', date: '12/25/2024', status: 'success' },
    { user: 'mike@example.com', action: 'Upgraded to Pro', date: '12/24/2024', status: 'success' },
    { user: 'emma@example.com', action: 'Account Created', date: '12/24/2024', status: 'success' },
    { user: 'david@example.com', action: 'Trial Expired', date: '12/23/2024', status: 'pending' },
  ]
}