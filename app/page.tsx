'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Calendar, Users, Clock, Shield, Smartphone, CreditCard, BarChart, CheckCircle, Star, ArrowRight, Menu, X, Apple, Bell } from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [androidEmail, setAndroidEmail] = useState('')
  const [androidSubmitted, setAndroidSubmitted] = useState(false)

  const handleAndroidNotify = async (e: React.FormEvent) => {
    e.preventDefault()
    if (androidEmail) {
      try {
        const response = await fetch('/api/notify-android', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: androidEmail })
        })
        
        if (response.ok) {
          setAndroidSubmitted(true)
          setAndroidEmail('')
          setTimeout(() => setAndroidSubmitted(false), 5000)
        }
      } catch (error) {
        console.error('Error submitting email:', error)
      }
    }
  }
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image 
                src="/totbook-logo.png" 
                alt="TotBook Logo" 
                width={120} 
                height={40} 
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-blue-600 transition">Features</a>
              <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition">Pricing</a>
              <a href="#benefits" className="text-slate-600 hover:text-blue-600 transition">Benefits</a>
              <Link href="/privacy" className="text-slate-600 hover:text-blue-600 transition">Privacy</Link>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition transform hover:scale-105">
                Get Started
              </button>
            </div>
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
      
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white top-16">
          <div className="flex flex-col p-4 space-y-4">
            <a 
              href="#features" 
              className="text-lg text-slate-600 hover:text-blue-600 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-lg text-slate-600 hover:text-blue-600 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#benefits" 
              className="text-lg text-slate-600 hover:text-blue-600 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <Link 
              href="/privacy" 
              className="text-lg text-slate-600 hover:text-blue-600 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy
            </Link>
            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition">
              Get Started
            </button>
          </div>
        </div>
      )}

      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <Image 
                src="/totbook-logo.png" 
                alt="TotBook Logo" 
                width={200} 
                height={80} 
                className="h-20 w-auto mx-auto mb-4"
              />
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-3">
                TotBook
              </h1>
              <p className="text-xl sm:text-2xl text-slate-700 font-medium mb-2">
                Professional Car Seat Installation Booking
              </p>
              <p className="text-lg text-slate-600">
                The Complete Management Solution for Safety Professionals
              </p>
            </div>
            
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-8">
              <span className="text-blue-600 text-sm font-semibold">🚀 14-Day Free Trial • No Credit Card Required</span>
            </div>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Stop losing time on manual scheduling. Automate your entire booking process 
              and focus on what matters most - keeping children safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg text-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition">
                Watch Demo
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://apps.apple.com/gb/app/totbook/id6749780830"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
              >
                <Apple className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <div className="px-6 py-3 bg-gray-100 text-gray-500 rounded-xl flex items-center justify-center">
                <Smartphone className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <div className="text-xs">Android</div>
                  <div className="text-sm font-semibold">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            The Problem TotBook Solves
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Manual scheduling is costing you money and customers. Here&apos;s what you&apos;re dealing with:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Clock className="w-6 h-6" />, title: "Time Wasted", desc: "5+ hours weekly on scheduling calls" },
              { icon: <X className="w-6 h-6" />, title: "Double Bookings", desc: "Manual errors cost you credibility" },
              { icon: <Users className="w-6 h-6" />, title: "Lost Customers", desc: "No online booking means missed opportunities" },
              { icon: <CreditCard className="w-6 h-6" />, title: "Payment Delays", desc: "Chasing payments wastes time" },
              { icon: <Calendar className="w-6 h-6" />, title: "No-Shows", desc: "40% reduction possible with reminders" },
              { icon: <BarChart className="w-6 h-6" />, title: "No Insights", desc: "Can't track growth without data" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition">
                <div className="text-red-500 mb-3">{item.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            See TotBook in Action
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Beautiful, intuitive interface designed for professionals on the go
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image 
                  src="/screenshot-1.png" 
                  alt="TotBook Calendar View" 
                  width={400} 
                  height={800} 
                  className="w-full h-auto transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <p className="text-center mt-4 text-slate-700 font-semibold">Customer Management</p>
              <p className="text-center text-slate-600 text-sm">Comprehensive profiles with history tracking</p>
            </div>
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image 
                  src="/screenshot-2.png" 
                  alt="TotBook Stripe Integration" 
                  width={400} 
                  height={800} 
                  className="w-full h-auto transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <p className="text-center mt-4 text-slate-700 font-semibold">Stripe Payment Integration</p>
              <p className="text-center text-slate-600 text-sm">Secure, instant payment processing</p>
            </div>
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image 
                  src="/screenshot-3.png" 
                  alt="TotBook Website Booking Widget" 
                  width={400} 
                  height={800} 
                  className="w-full h-auto transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <p className="text-center mt-4 text-slate-700 font-semibold">Free Website Widget</p>
              <p className="text-center text-slate-600 text-sm">Customers book directly from your website</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Everything You Need to Run Your Business
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-3xl mx-auto">
            Powerful features designed specifically for car seat installation professionals
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition"></div>
              <div className="relative bg-white p-8 rounded-lg">
                <Calendar className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Smart Calendar Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Visual monthly, weekly, and daily views</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Color-coded appointment status</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Time-off and break management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Real-time availability updates</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition"></div>
              <div className="relative bg-white p-8 rounded-lg">
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Multi-Staff Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Individual staff profiles & schedules</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Customisable availability per technician</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Permission controls & access management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Staff-specific service assignments</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition"></div>
              <div className="relative bg-white p-8 rounded-lg">
                <CreditCard className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Payment Processing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Stripe integration for secure payments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Send payment links via email</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Track payment status automatically</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Complete transaction records</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition"></div>
              <div className="relative bg-white p-8 rounded-lg">
                <Smartphone className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Mobile-First Design</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Works perfectly on iPhone and iPad</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Offline capability for key features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Push notifications for appointments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">One-tap quick actions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">Online Booking Widget</h3>
              <p className="text-xl mb-8 text-blue-100">
                Let customers book 24/7 directly from your website. No coding required.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Shield className="w-10 h-10 mb-3 mx-auto" />
                  <h4 className="font-semibold mb-2">Secure & Reliable</h4>
                  <p className="text-sm text-blue-100">GDPR compliant with 99.9% uptime</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <BarChart className="w-10 h-10 mb-3 mx-auto" />
                  <h4 className="font-semibold mb-2">Real-Time Analytics</h4>
                  <p className="text-sm text-blue-100">Track bookings and revenue growth</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Star className="w-10 h-10 mb-3 mx-auto" />
                  <h4 className="font-semibold mb-2">Custom Branding</h4>
                  <p className="text-sm text-blue-100">Match your business colours perfectly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Choose the plan that fits your business. Upgrade or downgrade anytime.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
              <p className="text-slate-600 mb-6">Perfect for solo professionals</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">£14.99</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600">10 bookings per month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600">All core features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600">Email support</span>
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition">
                Start Free Trial
              </button>
            </div>

            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Growing</h3>
                <p className="text-slate-600 mb-6">Great for expanding businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">£24.99</span>
                  <span className="text-slate-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-600">50 bookings per month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-600">Advanced analytics</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105">
                  Start Free Trial
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Scale</h3>
              <p className="text-slate-600 mb-6">For high-volume businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">£49.99</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600">Unlimited bookings</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600">Premium support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-slate-600">Custom integrations</span>
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Transform Your Business Today
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-3">
                  <Users className="w-6 h-6" />
                </span>
                For Business Owners
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-600">Save 5+ hours per week on scheduling and admin</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-600">Reduce no-shows by 40% with automated reminders</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-600">Get paid faster with integrated payment processing</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-600">Professional image with online booking capability</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-600">Scale your business with multi-staff support</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="bg-green-100 text-green-600 rounded-lg p-2 mr-3">
                  <Star className="w-6 h-6" />
                </span>
                For Your Customers
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-600">Book 24/7 online at their convenience</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-600">Instant confirmation of appointments</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-600">Easy rescheduling if plans change</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-600">Secure payments through trusted Stripe</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-600">Clear communication with automated updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of car seat professionals already using TotBook
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:shadow-xl transition transform hover:scale-105">
              Start 14-Day Free Trial
            </button>
            <a 
              href="https://apps.apple.com/gb/app/totbook/id6749780830"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white/10 transition"
            >
              <Apple className="w-5 h-5 mr-2" />
              Download from App Store
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
            <h3 className="text-white font-semibold text-lg mb-3 flex items-center justify-center">
              <Smartphone className="w-5 h-5 mr-2" />
              Android Coming Soon!
            </h3>
            {!androidSubmitted ? (
              <form onSubmit={handleAndroidNotify} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email"
                  placeholder="Enter your email"
                  value={androidEmail}
                  onChange={(e) => setAndroidEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <button 
                  type="submit"
                  className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Notify Me
                </button>
              </form>
            ) : (
              <div className="text-center py-3">
                <CheckCircle className="w-6 h-6 text-white mx-auto mb-2" />
                <p className="text-white">Thank you! We'll notify you when the Android app launches.</p>
              </div>
            )}
          </div>
          <p className="text-sm text-blue-100 mt-6">
            No credit card required • Setup in 5 minutes • Cancel anytime
          </p>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image 
                src="/totbook-logo.png" 
                alt="TotBook Logo" 
                width={140} 
                height={50} 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-slate-400 text-sm">
                Professional car seat installation booking management made simple.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-slate-400 hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="text-slate-400 hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition">About</a></li>
                <li><Link href="/privacy" className="text-slate-400 hover:text-white transition">Privacy Policy</Link></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="mailto:support@totbook.co.uk" className="text-slate-400 hover:text-white transition">support@totbook.co.uk</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} TotBook. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
