import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <span className="text-koda-teal font-medium text-sm uppercase tracking-wider">Legal</span>
            <h1 className="text-4xl md:text-5xl font-display text-koda-navy mt-2 mb-2">Terms & Conditions</h1>
            <p className="text-gray-400 text-sm">Last updated: March 7, 2025 | Swing Cap LLC d/b/a BrightKoda / Complete Homecare / Xtreme Care</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using any website operated by Swing Cap LLC under the brands BrightKoda, Complete Homecare, or Xtreme Care (collectively, "we," "us," or "our"), including brightkoda.io and brightkoda.com, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">2. Services Description</h2>
              <p>Swing Cap LLC provides technology solutions, staffing services, and home care services through its affiliated brands. Services include but are not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Caregiver onboarding and compliance technology (BrightKoda)</li>
                <li>Home care services for patients and families (Complete Homecare / Xtreme Care)</li>
                <li>Healthcare staffing (Wayne Staffing)</li>
                <li>Chronic care management and remote patient monitoring (Patient Bridge Health)</li>
              </ul>
            </section>

            <section className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h2 className="text-2xl font-display text-koda-navy mb-3">3. SMS Messaging Program Terms</h2>
              <p className="mb-4">By providing your mobile phone number and checking the SMS consent checkbox on any of our forms, you agree to the following SMS program terms:</p>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-koda-navy">Program Description</p>
                  <p>Complete Homecare / Xtreme Care (Swing Cap LLC) sends SMS messages to job applicants, prospective caregivers, and prospective home care clients who have explicitly requested information or applied for employment, or requested information about our home care services. Messages are used to confirm inquiries, send onboarding and application links, appointment reminders, and service-related updates.</p>
                </div>

                <div>
                  <p className="font-semibold text-koda-navy">How to Opt In</p>
                  <p>You opt in by providing your mobile number on our online forms (website contact forms, job application forms, and job board or social media lead forms) and explicitly checking the unchecked consent checkbox agreeing to receive text messages. Consent may also be provided verbally during phone calls as described in our Privacy Policy.</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-teal-200 space-y-2">
                  <p><strong>Opt-Out:</strong> Reply <strong className="text-koda-teal">STOP</strong> to any message. Supported keywords: STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT, REVOKE, OPTOUT. You will receive one final confirmation message and no further SMS will be sent.</p>
                  <p><strong>Help:</strong> Reply <strong className="text-koda-teal">HELP</strong> or INFO to any message for assistance. You may also email privacy@brightkoda.io.</p>
                  <p><strong>Message Frequency:</strong> Message frequency varies based on your activity with our services.</p>
                  <p><strong>Cost:</strong> Message and data rates may apply. Contact your wireless carrier for details.</p>
                  <p><strong>Carriers:</strong> Participating carriers may vary. We are not responsible for any delays or failures in receiving SMS messages.</p>
                  <p><strong>No Promotional Messages:</strong> No promotional messages are sent to users who have not provided prior consent. All messages are directly related to your application or inquiry.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">4. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide accurate and complete information in all forms and applications</li>
                <li>Not misrepresent your qualifications, credentials, or identity</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems or data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">5. Intellectual Property</h2>
              <p>All content on our websites, including text, graphics, logos, and software, is the property of Swing Cap LLC and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">6. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Swing Cap LLC and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you, if any, for accessing our services in the twelve months preceding the claim.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">7. Disclaimer of Warranties</h2>
              <p>Our services are provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that our services will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">8. Governing Law</h2>
              <p>These Terms shall be governed by the laws of the State of New York, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of New York.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">9. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. We will notify you of significant changes by updating the "Last updated" date. Continued use of our services after changes constitutes acceptance of the revised Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-koda-navy mb-3">10. Contact</h2>
              <div className="bg-koda-cream rounded-lg p-4">
                <p><strong>Swing Cap LLC d/b/a BrightKoda</strong></p>
                <p>Email: legal@brightkoda.io</p>
                <p>Website: brightkoda.io</p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
