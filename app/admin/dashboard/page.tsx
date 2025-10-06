'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { 
  Users, 
  Download, 
  CreditCard, 
  TrendingUp,
  Calendar,
  LogOut,
  RefreshCw,
  Activity,
  X,
  Mail,
  Phone,
  User,
  CheckCircle,
  Clock
} from 'lucide-react'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

interface DashboardStats {
  totalUsers: number
  totalCustomers: number
  totalDownloads: number
  activeTrials: number
  paidUsers: number
  recentActivity: any[]
  growthData: any[]
  deviceBreakdown: any[]
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalCustomers: 0,
    totalDownloads: 0,
    activeTrials: 0,
    paidUsers: 0,
    recentActivity: [],
    growthData: [],
    deviceBreakdown: []
  })
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [userDetails, setUserDetails] = useState<any>(null)
  const [loadingUser, setLoadingUser] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const fetchStats = async () => {
    try {
      setRefreshing(true)
      const response = await fetch('/api/admin/stats')
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  const fetchUserDetails = async (userId: string) => {
    setLoadingUser(true)
    try {
      const response = await fetch(`/api/admin/users/${userId}`)
      if (response.ok) {
        const data = await response.json()
        setUserDetails(data)
      }
    } catch (error) {
      console.error('Error fetching user details:', error)
    } finally {
      setLoadingUser(false)
    }
  }

  const handleUserClick = (activity: any) => {
    setSelectedUser(activity)
    if (activity.userId) {
      fetchUserDetails(activity.userId)
    }
  }

  const COLORS = ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981']

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">TotBook Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={fetchStats}
                disabled={refreshing}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <RefreshCw className={`w-5 h-5 ${refreshing ? 'animate-spin' : ''}`} />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.totalUsers.toLocaleString()}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Customers</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.totalCustomers.toLocaleString()}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">App Downloads</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.totalDownloads.toLocaleString()}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Download className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Subscriptions</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.paidUsers.toLocaleString()}
                </p>
              </div>
              <div className="bg-pink-100 p-3 rounded-lg">
                <CreditCard className="w-6 h-6 text-pink-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Growth Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={stats.growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#8b5cf6" 
                  fill="#8b5cf6" 
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Device Breakdown */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stats.deviceBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {stats.deviceBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500 border-b">
                  <th className="pb-3">User</th>
                  <th className="pb-3">Business</th>
                  <th className="pb-3">Action</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {stats.recentActivity.map((activity, index) => (
                  <tr 
                    key={index} 
                    className="text-sm text-gray-900 hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => handleUserClick(activity)}
                  >
                    <td className="py-3 text-purple-600 hover:text-purple-700 font-medium">
                      {activity.user}
                    </td>
                    <td className="py-3 font-medium">{activity.businessName}</td>
                    <td className="py-3">{activity.action}</td>
                    <td className="py-3">{activity.date}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        activity.subscriptionStatus === 'trialing' 
                          ? 'bg-yellow-100 text-yellow-700'
                          : activity.subscriptionStatus === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {activity.subscriptionStatus || 'none'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* User Details Modal */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">User Details</h2>
                <button
                  onClick={() => {
                    setSelectedUser(null)
                    setUserDetails(null)
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6">
                {loadingUser ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
                    <p className="mt-2 text-gray-600">Loading user details...</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Basic Info */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-3">Basic Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 text-gray-400 mr-3" />
                          <span className="text-gray-900">{selectedUser.user || 'No email'}</span>
                        </div>
                        {selectedUser.phone && (
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 text-gray-400 mr-3" />
                            <span className="text-gray-900">{selectedUser.phone}</span>
                          </div>
                        )}
                        {selectedUser.fullName && (
                          <div className="flex items-center">
                            <User className="w-4 h-4 text-gray-400 mr-3" />
                            <span className="text-gray-900">{selectedUser.fullName}</span>
                          </div>
                        )}
                        {selectedUser.businessName && selectedUser.businessName !== '-' && (
                          <div className="flex items-center">
                            <Activity className="w-4 h-4 text-gray-400 mr-3" />
                            <span className="text-gray-900 font-medium">{selectedUser.businessName}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Account Status */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-3">Account Status</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-500">Onboarding</p>
                          <p className="text-sm font-medium text-gray-900 mt-1">
                            {selectedUser.onboardingCompleted ? 
                              <span className="flex items-center text-green-600">
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Completed
                              </span> : 
                              <span className="flex items-center text-yellow-600">
                                <Clock className="w-4 h-4 mr-1" />
                                In Progress
                              </span>
                            }
                          </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-xs text-gray-500">Joined</p>
                          <p className="text-sm font-medium text-gray-900 mt-1">{selectedUser.date}</p>
                        </div>
                      </div>
                    </div>

                    {/* Subscription Info */}
                    {userDetails && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-3">Subscription Details</h3>
                        <div className="bg-purple-50 rounded-lg p-4">
                          {userDetails.subscription ? (
                            <>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">Plan</span>
                                <span className="text-sm font-medium text-gray-900">
                                  {userDetails.subscription.plan || 'Free'}
                                </span>
                              </div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">Status</span>
                                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                                  userDetails.subscription.status === 'active' 
                                    ? 'bg-green-100 text-green-700'
                                    : userDetails.subscription.status === 'trialing'
                                    ? 'bg-yellow-100 text-yellow-700'
                                    : 'bg-gray-100 text-gray-700'
                                }`}>
                                  {userDetails.subscription.status || 'Inactive'}
                                </span>
                              </div>
                              {userDetails.subscription.trialEnds && (
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-gray-600">Trial Ends</span>
                                  <span className="text-sm font-medium text-gray-900">
                                    {new Date(userDetails.subscription.trialEnds).toLocaleDateString('en-GB')}
                                  </span>
                                </div>
                              )}
                            </>
                          ) : (
                            <p className="text-sm text-gray-600">No active subscription</p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Activity History */}
                    {userDetails?.recentActivity && userDetails.recentActivity.length > 0 && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-3">Recent Activity</h3>
                        <div className="space-y-2">
                          {userDetails.recentActivity.map((act: any, idx: number) => (
                            <div key={idx} className="flex justify-between items-center py-2 border-b last:border-0">
                              <span className="text-sm text-gray-600">{act.action}</span>
                              <span className="text-xs text-gray-400">{act.date}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}