import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    // Check if user is authenticated using regular client
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    // Use admin client for data fetching
    const adminSupabase = createAdminClient()
    
    // Get user profile
    const { data: profile, error: profileError } = await adminSupabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single()
    
    if (profileError) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    
    // Get subscription info
    const { data: subscription } = await adminSupabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', id)
      .order('created_at', { ascending: false })
      .limit(1)
      .single()
    
    // Get trial info
    const { data: trial } = await adminSupabase
      .from('trials')
      .select('*')
      .eq('user_id', id)
      .order('created_at', { ascending: false })
      .limit(1)
      .single()
    
    // Get recent downloads
    const { data: downloads } = await adminSupabase
      .from('app_downloads')
      .select('*')
      .eq('user_id', id)
      .order('created_at', { ascending: false })
      .limit(5)
    
    // Get activity logs if they exist
    const { data: activityLogs } = await adminSupabase
      .from('activity_logs')
      .select('*')
      .eq('user_id', id)
      .order('created_at', { ascending: false })
      .limit(10)
    
    // Format the response
    const userDetails = {
      profile: {
        id: profile.id,
        email: profile.email,
        phone: profile.phone,
        fullName: profile.full_name,
        createdAt: profile.created_at,
        onboardingCompleted: profile.onboarding_completed,
        tutorialStatus: profile.tutorial_status
      },
      subscription: subscription ? {
        status: subscription.status,
        plan: subscription.plan_type,
        trialEnds: subscription.trial_ends_at,
        startedAt: subscription.started_at,
        endedAt: subscription.ended_at
      } : null,
      trial: trial ? {
        status: trial.status,
        startedAt: trial.started_at,
        endsAt: trial.ends_at
      } : null,
      recentActivity: [
        ...((downloads || []).map(dl => ({
          action: 'App Downloaded',
          date: new Date(dl.created_at).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }),
          type: 'download'
        }))),
        ...((activityLogs || []).map(log => ({
          action: log.action,
          date: new Date(log.created_at).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }),
          type: 'activity'
        })))
      ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5)
    }
    
    return NextResponse.json(userDetails)
    
  } catch (error) {
    console.error('Error fetching user details:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}