import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              Last updated: January {new Date().getFullYear()}
            </p>

            <p className="text-slate-600 mb-6">
              These terms and conditions (&quot;Terms&quot;) govern your use of the TotBook mobile application and website (the &quot;Service&quot;) operated by TotBook (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
            </p>

            <p className="text-slate-600 mb-6">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">1. Definitions</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li><strong>&quot;Service&quot;</strong> refers to the TotBook application and website</li>
              <li><strong>&quot;Provider&quot;</strong> refers to businesses and professionals using TotBook to manage bookings</li>
              <li><strong>&quot;Customer&quot;</strong> refers to individuals booking services through providers</li>
              <li><strong>&quot;Content&quot;</strong> refers to all information, data, text, and materials available through the Service</li>
              <li><strong>&quot;User&quot;</strong> refers to both Providers and Customers</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">2. Account Registration</h2>
            <p className="text-slate-600 mb-4">
              To use certain features of the Service, you must register for an account. When registering:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>You must provide accurate, complete, and current information</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You are responsible for all activities that occur under your account</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>You must be at least 18 years old to register for an account</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">3. Service Description</h2>
            <p className="text-slate-600 mb-6">
              TotBook provides a booking management platform for car seat installation professionals. The Service includes:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Appointment scheduling and management</li>
              <li>Customer relationship management</li>
              <li>Payment processing integration</li>
              <li>Automated email reminders and notifications</li>
              <li>Business analytics and reporting</li>
              <li>Route optimization and service area management</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">4. Acceptable Use</h2>
            <p className="text-slate-600 mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Transmit harmful, offensive, or illegal content</li>
              <li>Engage in fraudulent or deceptive practices</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Attempt to gain unauthorized access to any systems</li>
              <li>Collect or harvest user information without consent</li>
              <li>Use automated systems or software to extract data</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">5. Subscription and Pricing</h2>
            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Subscription Plans</h3>
            <p className="text-slate-600 mb-4">
              We offer various subscription plans with different features and pricing. Details of current plans are available on our website.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Payment Terms</h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Subscription fees are billed in advance on a monthly or annual basis</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>We reserve the right to change pricing with 30 days notice</li>
              <li>You are responsible for all applicable taxes</li>
              <li>Payment processing is handled securely through Stripe</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Free Trial</h3>
            <p className="text-slate-600 mb-6">
              We may offer a free trial period. At the end of the trial, your account will be automatically upgraded to a paid subscription unless you cancel.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">6. Intellectual Property</h2>
            <p className="text-slate-600 mb-6">
              The Service and its original content, features, and functionality are owned by TotBook and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Your Content</h3>
            <p className="text-slate-600 mb-6">
              You retain ownership of any content you upload to the Service. By uploading content, you grant us a worldwide, non-exclusive, royalty-free license to use, store, and process your content solely for the purpose of providing the Service.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">7. Privacy and Data Protection</h2>
            <p className="text-slate-600 mb-6">
              Your use of the Service is also governed by our Privacy Policy. By using the Service, you consent to the collection and use of information as described in our Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">8. Third-Party Services</h2>
            <p className="text-slate-600 mb-6">
              The Service may integrate with third-party services (such as payment processors, mapping services, etc.). Your use of these services is governed by their respective terms and conditions. We are not responsible for the practices of third-party services.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">9. Disclaimers and Limitations of Liability</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Service Provided &quot;As Is&quot;</h3>
            <p className="text-slate-600 mb-6">
              The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or completely secure.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Limitation of Liability</h3>
            <p className="text-slate-600 mb-6">
              To the maximum extent permitted by law, TotBook shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3">Provider Services</h3>
            <p className="text-slate-600 mb-6">
              We are not responsible for the quality, safety, or legality of services provided by Providers using our platform. Any disputes between Customers and Providers should be resolved directly between the parties.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">10. Indemnification</h2>
            <p className="text-slate-600 mb-6">
              You agree to indemnify, defend, and hold harmless TotBook and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, or expenses arising from your use of the Service or violation of these Terms.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">11. Termination</h2>
            <p className="text-slate-600 mb-4">
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.
            </p>
            <p className="text-slate-600 mb-6">
              Upon termination, your right to use the Service will immediately cease. You may terminate your account at any time through your account settings or by contacting support.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">12. Data Retention and Export</h2>
            <p className="text-slate-600 mb-6">
              Upon termination, we will retain your data for 90 days to allow for data export. After this period, your data will be permanently deleted unless we are required by law to retain it longer.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">13. Modifications to Terms</h2>
            <p className="text-slate-600 mb-6">
              We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by email or through the Service at least 30 days before the changes take effect. Your continued use of the Service after the changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">14. Governing Law</h2>
            <p className="text-slate-600 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">15. Severability</h2>
            <p className="text-slate-600 mb-6">
              If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">16. Entire Agreement</h2>
            <p className="text-slate-600 mb-6">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and TotBook regarding your use of the Service.
            </p>

            <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">17. Contact Information</h2>
            <p className="text-slate-600 mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <p className="text-slate-600">
                <strong>Email:</strong> <a href="mailto:support@totbook.co.uk" className="text-blue-600 hover:underline">support@totbook.co.uk</a>
              </p>
              <p className="text-slate-600 mt-2">
                <strong>Website:</strong> TotBook.co.uk
              </p>
              <p className="text-slate-600 mt-2">
                <strong>Company:</strong> TotBook
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-12">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Agreement to Terms</h3>
              <p className="text-slate-600">
                By using TotBook, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
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
              <Link href="/privacy" className="text-slate-400 hover:text-white transition">Privacy</Link>
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