import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <span className="text-koda-teal font-medium text-sm uppercase tracking-wider">Legal</span>
            <h1 className="text-4xl md:text-5xl font-display text-koda-navy mt-2 mb-2">Privacy Policy</h1>
            <p className="text-gray-400 text-sm">Last updated: April 8, 2026 | Swing Cap LLC d/b/a BrightKoda / Complete Homecare / Xtreme Care</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">1. Introduction</h2>
              <p>Swing Cap LLC, operating under the brands BrightKoda, Complete Homecare, and Xtreme Care ("Company," "we," "us," or "our"), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (<strong>brightkoda.org</strong>) or interact with our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Personal Identification:</strong> Name, email address, phone number, mailing address</li>
                <li><strong>Employment Information:</strong> Work history, certifications, credentials (for caregiver applicants)</li>
                <li><strong>Health-Related Information:</strong> Care needs and preferences (for care service inquiries)</li>
                <li><strong>Technical Data:</strong> IP address, browser type, pages visited, device information</li>
                <li><strong>Communications:</strong> Records of your inquiries, applications, and correspondence with us</li>
              </ul>
            </section>

            <section className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h2 className="text-2xl font-display text-koda-navy mb-3">3. SMS / Text Messaging</h2>
              <p className="mb-3">When you provide your mobile phone number and check the SMS consent checkbox(es) on our website forms at <strong>brightkoda.org</strong>, you expressly consent to receive SMS text messages from Complete Homecare / Xtreme Care (Swing Cap LLC) regarding:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li><strong>Transactional/Informational:</strong> Application status updates, onboarding links, appointment confirmations and reminders, service-related updates directly related to your inquiry</li>
                <li><strong>Promotional/Marketing</strong> (if separately opted in): Job openings, service announcements, and related offers from Complete Homecare / Xtreme Care</li>
              </ul>
              <div className="bg-white rounded-lg p-4 border border-teal-200 space-y-2 text-sm">
                <p><strong>Opt-Out:</strong> Reply <strong>STOP</strong> to any SMS message to unsubscribe. You will receive a confirmation and no further messages will be sent.</p>
                <p><strong>Help:</strong> Reply <strong>HELP</strong> to any SMS message for assistance.</p>
                <p><strong>Message Frequency:</strong> Message frequency varies based on your interaction with our services.</p>
                <p><strong>Costs:</strong> Message and data rates may apply depending on your mobile carrier plan.</p>
                <p><strong>No Purchased Lists:</strong> We do not use purchased, shared, or third-party contact lists. All SMS messages are sent only to individuals who have directly provided consent through our forms or verbally during phone calls.</p>
                <p><strong>Separate Consent:</strong> Transactional and promotional SMS communications require separate opt-in consent. You may opt in to one or both.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">4. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To process and respond to job applications and service inquiries</li>
                <li>To communicate with you about your application or service request</li>
                <li>To send SMS messages you have consented to receive</li>
                <li>To improve our websites, services, and technology products</li>
                <li>To comply with legal obligations and regulatory requirements</li>
                <li>To protect against fraudulent or unauthorized activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">5. Sharing of Information</h2>
              <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Service Providers:</strong> Companies that assist us in operating our website and services (e.g., Twilio for SMS delivery, hosting providers)</li>
                <li><strong>Affiliated Entities:</strong> Our affiliated companies including Complete Care Management Inc., Wayne Staffing, and Patient Bridge Health, as necessary to provide services</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              <p className="mt-3"><strong>SMS consent and phone numbers are never shared with third parties for their own marketing purposes.</strong></p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">6. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">7. Your Rights</h2>
              <p>Depending on your location, you may have rights including: the right to access your personal data, the right to correct inaccurate data, the right to request deletion of your data, and the right to opt out of SMS communications at any time by replying STOP.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">8. Cookies</h2>
              <p>Our website uses cookies and similar tracking technologies to improve functionality and analyze usage. You can control cookies through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">9. Children's Privacy</h2>
              <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">10. Contact Us</h2>
              <p>For privacy-related questions or to exercise your rights, contact us at:</p>
              <div className="bg-koda-cream rounded-lg p-4 mt-3">
                <p><strong>Swing Cap LLC d/b/a BrightKoda</strong></p>
                <p>Email: privacy@brightkoda.org</p>
                <p>Website: brightkoda.org</p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
