import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center text-slate-600 hover:text-blue-600 transition">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <span className="text-slate-300">|</span>
              <Image 
                src="/totbook-logo.png" 
                alt="TotBook Logo" 
                width={100} 
                height={35} 
                className="h-9 w-auto"
              />
            </div>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              Last updated: January {new Date().getFullYear()}
            </p>

            <p className="text-slate-600 mb-6">
              At TotBook, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Personal Information</h3>
            <p className="text-slate-600 mb-4">
              When you register for TotBook, we collect information such as:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Name and business name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business address and service areas</li>
              <li>Payment information (processed securely through Stripe)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Customer Information</h3>
            <p className="text-slate-600 mb-4">
              When you add customers to your booking system, we store:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Customer names</li>
              <li>Contact information (email and phone)</li>
              <li>Appointment history</li>
              <li>Service preferences</li>
              <li>Notes you add about the customer</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Usage Information</h3>
            <p className="text-slate-600 mb-6">
              We automatically collect certain information about your device and how you interact with TotBook, including:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Device type and operating system</li>
              <li>IP address</li>
              <li>App usage patterns</li>
              <li>Features accessed</li>
              <li>Error logs and performance data</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Provide and maintain our booking management services</li>
              <li>Process payments and send payment reminders via email</li>
              <li>Send appointment confirmations and reminders via email</li>
              <li>Improve our app features and user experience</li>
              <li>Provide customer support</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">3. Information Sharing</h2>
            <p className="text-slate-600 mb-4">
              We do not sell, trade, or rent your personal information. We may share information with:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (e.g., Stripe for payments, Supabase for data storage)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Your Consent:</strong> With your explicit permission</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">4. Data Security</h2>
            <p className="text-slate-600 mb-6">
              We implement appropriate technical and organisational security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Regular backups</li>
              <li>PCI compliance for payment processing through Stripe</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">5. Data Retention</h2>
            <p className="text-slate-600 mb-6">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When you cancel your account, we will delete or anonymize your personal information within 90 days, except where we are required to retain it for legal purposes.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">6. Your Rights</h2>
            <p className="text-slate-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Request data portability</li>
              <li>Withdraw consent</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">7. GDPR Compliance</h2>
            <p className="text-slate-600 mb-6">
              For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). We process personal data based on:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Contract performance (to provide our services)</li>
              <li>Legal obligations</li>
              <li>Legitimate interests (to improve our services)</li>
              <li>Your consent (where applicable)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-slate-600 mb-6">
              TotBook is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">9. Cookies and Tracking</h2>
            <p className="text-slate-600 mb-6">
              Our website uses cookies to enhance your experience. You can control cookie preferences through your browser settings. Our mobile app may use similar technologies for analytics and performance monitoring.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">10. Third-Party Links</h2>
            <p className="text-slate-600 mb-6">
              Our app may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">11. Changes to This Policy</h2>
            <p className="text-slate-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through the app. Your continued use of TotBook after changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">12. Contact Us</h2>
            <p className="text-slate-600 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <p className="text-slate-600">
                <strong>Email:</strong> <a href="mailto:support@totbook.co.uk" className="text-blue-600 hover:underline">support@totbook.co.uk</a>
              </p>
              <p className="text-slate-600 mt-2">
                <strong>Website:</strong> TotBook.co.uk
              </p>
              <p className="text-slate-600 mt-2">
                <strong>App:</strong> TotBook - Professional Car Seat Installation Booking Management
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-12">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Your Privacy Matters</h3>
              <p className="text-slate-600">
                We are committed to protecting your privacy and ensuring your data is handled responsibly. If you have any concerns about how we handle your information, please don&apos;t hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Image 
              src="/totbook-logo.png" 
              alt="TotBook Logo" 
              width={140} 
              height={50} 
              className="h-12 w-auto mb-4 mx-auto brightness-0 invert"
            />
            <p className="text-slate-400 text-sm mb-4">
              Professional car seat installation booking management made simple.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-slate-400 hover:text-white transition">Home</Link>
              <a href="mailto:support@totbook.co.uk" className="text-slate-400 hover:text-white transition">Contact</a>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} TotBook. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}