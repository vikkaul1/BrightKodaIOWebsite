import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Opt-In Policy | BrightKoda",
  description: "SMS messaging consent policy for Complete Homecare / Xtreme Care operated by Swing Cap LLC.",
  alternates: {
    canonical: "https://brightkoda.org/sms-opt-in",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SMSOptInPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-10">
            <span className="text-koda-teal font-medium text-sm uppercase tracking-wider">SMS Program</span>
            <h1 className="text-4xl md:text-5xl font-display text-koda-navy mt-2 mb-4">
              SMS Consent &amp; Opt-In
            </h1>
            <p className="text-gray-500 text-lg">
              Complete Homecare / Xtreme Care (Swing Cap LLC) sends SMS messages
              to individuals who explicitly opt in. This page describes our SMS
              program and how consent is collected.
            </p>
          </div>

          {/* How We Use SMS */}
          <div className="bg-koda-cream rounded-2xl p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-display text-koda-navy mb-4">How We Use SMS Messages</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Complete Homecare and Xtreme Care use SMS text messaging to communicate with job
              applicants, prospective caregivers, and prospective home care clients who have explicitly
              requested information or applied for employment or services. Messages may include:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
              <li>Onboarding application links</li>
              <li>Appointment reminders and confirmations</li>
              <li>Status updates related to your application or service request</li>
              <li>Responses to inquiries submitted through our website or by phone</li>
            </ul>
            <p className="text-gray-600">
              We do <strong>not</strong> send promotional or marketing messages to individuals who have
              not provided prior consent. We do <strong>not</strong> use purchased or shared contact lists.
            </p>
          </div>

          {/* How You Opt In */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-display text-koda-navy mb-4">How You Opt In</h2>
            <p className="text-gray-600 mb-6">You may consent to receive SMS messages from us in one of two ways:</p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-koda-navy mb-2">1. Online Form Submission</h3>
                <p className="text-gray-600 text-sm mb-4">
                  When you submit a contact form, job application, or service inquiry form on our website,
                  you will see the following checkbox next to the phone number field:
                </p>

                {/* THE EXACT OPT-IN CTA — visible to TCR crawlers */}
                <div className="bg-teal-50 border-2 border-koda-teal rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 border-2 border-koda-teal rounded bg-white"></div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      I agree to receive SMS messages from{" "}
                      <strong>Complete Homecare / Xtreme Care</strong> about my application
                      or request for services. Message frequency varies. Message and data rates
                      may apply. Reply <strong>STOP</strong> to opt out, <strong>HELP</strong> for help.{" "}
                      <Link href="/terms" className="text-koda-teal underline hover:text-koda-tealLight">Terms</Link>
                      {" "}|{" "}
                      <Link href="/privacy-policy" className="text-koda-teal underline hover:text-koda-tealLight">Privacy Policy</Link>
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 mt-3 ml-9">
                    This checkbox is <strong>unchecked by default</strong>. You must actively check it to consent.
                    Submitting the form without checking the box will not enroll you in SMS communications.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-koda-navy mb-2">2. Verbal Consent by Phone</h3>
                <p className="text-gray-600 text-sm">
                  If you contact us by phone, our staff may ask whether you agree to receive SMS messages.
                  Staff will verbally disclose message frequency, applicable rates, and opt-out instructions
                  before sending any messages. SMS messages are only sent after you verbally confirm your agreement.
                </p>
              </div>
            </div>
          </div>

          {/* Message Frequency & Rates */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-display text-koda-navy mb-6">SMS Program Details</h2>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex gap-4 pb-4 border-b border-gray-100">
                <span className="font-semibold text-koda-navy w-44 flex-shrink-0">Program Name</span>
                <span>Complete Homecare / Xtreme Care Caregiver Onboarding SMS</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-100">
                <span className="font-semibold text-koda-navy w-44 flex-shrink-0">Operated By</span>
                <span>Swing Cap LLC d/b/a BrightKoda / Complete Homecare / Xtreme Care</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-100">
                <span className="font-semibold text-koda-navy w-44 flex-shrink-0">Message Frequency</span>
                <span>Message frequency varies based on the status of your application or service inquiry. Most contacts receive between 1–5 messages per interaction.</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-100">
                <span className="font-semibold text-koda-navy w-44 flex-shrink-0">Message &amp; Data Rates</span>
                <span>Standard message and data rates may apply depending on your mobile carrier and plan.</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-100">
                <span className="font-semibold text-koda-navy w-44 flex-shrink-0">How to Opt Out</span>
                <span>Reply <strong>STOP</strong> to any message. You will receive one final confirmation and no further messages will be sent. To resubscribe, reply <strong>START</strong>. Also supported: STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT, REVOKE, OPTOUT</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-100">
                <span className="font-semibold text-koda-navy w-44 flex-shrink-0">How to Get Help</span>
                <span>Reply <strong>HELP</strong> or INFO to any message, or email privacy@brightkoda.org</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-100">
                <span className="font-semibold text-koda-navy w-44 flex-shrink-0">Supported Opt-In Keywords</span>
                <span>START, JOIN, YES, OPTIN</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold text-koda-navy w-44 flex-shrink-0">No Spam</span>
                <span>We do not use purchased, shared, or third-party contact lists. All messages are sent only to individuals who have directly provided consent.</span>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-koda-cream rounded-2xl p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-display text-koda-navy mb-3">Privacy</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your mobile number and consent information are never sold, shared, or used for any
              purpose other than the communications described above. For full details, see our{" "}
              <Link href="/privacy-policy" className="text-koda-teal underline hover:text-koda-tealLight">Privacy Policy</Link>.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-display text-koda-navy mb-3">Contact</h2>
            <p className="text-gray-600 text-sm">
              <strong>Swing Cap LLC d/b/a Complete Homecare / Xtreme Care</strong><br />
              Website: <Link href="https://brightkoda.org" className="text-koda-teal underline">brightkoda.org</Link><br />
              Email: <a href="mailto:info@brightkoda.org" className="text-koda-teal underline">info@brightkoda.org</a>
            </p>
          </div>

          {/* Where forms appear */}
          <div className="bg-koda-cream rounded-2xl p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-display text-koda-navy mb-4">Where the Opt-In Appears</h2>
            <p className="text-gray-600 mb-4 text-sm">The SMS consent checkbox appears on the following pages:</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-koda-teal rounded-full flex-shrink-0"></span>
                <Link href="/apply" className="text-koda-teal underline hover:text-koda-tealLight text-sm">
                  brightkoda.org/apply — Caregiver Job Application Form
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-koda-teal rounded-full flex-shrink-0"></span>
                <Link href="/contact" className="text-koda-teal underline hover:text-koda-tealLight text-sm">
                  brightkoda.org/contact — Agency Inquiry &amp; Care Request Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div className="flex gap-4 justify-center">
            <Link href="/privacy-policy"
              className="bg-koda-teal text-white px-6 py-3 rounded-lg font-medium hover:bg-koda-tealLight transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms"
              className="border-2 border-koda-navy text-koda-navy px-6 py-3 rounded-lg font-medium hover:bg-koda-navy hover:text-white transition-colors text-sm">
              Terms &amp; Conditions
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
