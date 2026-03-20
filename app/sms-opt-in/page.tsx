import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

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
              SMS Consent & Opt-In
            </h1>
            <p className="text-gray-500 text-lg">
              Complete Homecare / Xtreme Care (Swing Cap LLC) sends SMS messages
              to individuals who explicitly opt in. This page describes our SMS
              program and how consent is collected.
            </p>
          </div>

          {/* How consent is collected */}
          <div className="bg-koda-cream rounded-2xl p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-display text-koda-navy mb-4">How We Collect Consent</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              End users opt in to receive SMS messages from Complete Homecare /
              Xtreme Care by providing their mobile number on our online forms
              (website contact forms, job application forms, and job-board or
              social media lead forms) and explicitly checking an unchecked
              consent checkbox.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The checkbox is never pre-checked. Users must actively check it
              before submitting any form. Submitting a form without checking the
              box does not enroll the user in SMS communications.
            </p>
          </div>

          {/* Live example of the opt-in CTA */}
          <div className="border-2 border-koda-teal rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-display text-koda-navy mb-2">
              SMS Opt-In Call to Action (CTA)
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              The following is the exact opt-in language and checkbox that
              appears on all our web forms:
            </p>

            {/* Static display of the consent checkbox — visible to crawlers */}
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                {/* Visible unchecked checkbox */}
                <div className="w-5 h-5 mt-0.5 flex-shrink-0 border-2 border-koda-teal rounded bg-white"></div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  I agree to receive SMS messages from{" "}
                  <strong>Complete Homecare / Xtreme Care</strong> (a brand of
                  Swing Cap LLC) about my application or request for employment
                  or home care services. Message frequency varies. Msg &amp;
                  data rates may apply. Reply <strong>STOP</strong> to opt out
                  at any time. Reply <strong>HELP</strong> for help.{" "}
                  <Link href="/terms" className="text-koda-teal underline hover:text-koda-tealLight">
                    Terms &amp; Conditions
                  </Link>{" "}
                  |{" "}
                  <Link href="/privacy-policy" className="text-koda-teal underline hover:text-koda-tealLight">
                    Privacy Policy
                  </Link>
                </p>
              </div>
              <p className="text-xs text-gray-400 mt-4 ml-9">
                ☝️ This checkbox appears unchecked by default on all forms.
                Users must check it to consent.
              </p>
            </div>
          </div>

          {/* SMS Program Details */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-display text-koda-navy mb-6">SMS Program Details</h2>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex gap-4 pb-4 border-b border-gray-100">
                <span className="font-semibold text-koda-navy w-40 flex-shrink-0">Program Name</span>
                <span>Complete Homecare / Xtreme Care Caregiver Onboarding SMS</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-100">
                <span className="font-semibold text-koda-navy w-40 flex-shrink-0">Operated By</span>
                <span>Swing Cap LLC d/b/a BrightKoda / Complete Homecare / Xtreme Care</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-100">
                <span className="font-semibold text-koda-navy w-40 flex-shrink-0">Message Types</span>
                <span>Application confirmations, onboarding links, appointment reminders, service-related updates</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-100">
                <span className="font-semibold text-koda-navy w-40 flex-shrink-0">Frequency</span>
                <span>Message frequency varies based on your application or service interaction</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-100">
                <span className="font-semibold text-koda-navy w-40 flex-shrink-0">Cost</span>
                <span>Msg &amp; data rates may apply</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-100">
                <span className="font-semibold text-koda-navy w-40 flex-shrink-0">To Opt Out</span>
                <span>Reply <strong>STOP</strong> to any message. Also supported: STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT, REVOKE, OPTOUT</span>
              </div>
              <div className="flex gap-4 pb-4 border-b border-gray-100">
                <span className="font-semibold text-koda-navy w-40 flex-shrink-0">For Help</span>
                <span>Reply <strong>HELP</strong> or INFO to any message, or email privacy@brightkoda.org</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold text-koda-navy w-40 flex-shrink-0">No Spam</span>
                <span>We do not use purchased or shared contact lists. All messages are sent only to individuals who have directly provided consent.</span>
              </div>
            </div>
          </div>

          {/* Where forms appear */}
          <div className="bg-koda-cream rounded-2xl p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-display text-koda-navy mb-4">Where the Opt-In Appears</h2>
            <p className="text-gray-600 mb-4">The SMS consent checkbox appears on the following pages of this website:</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-koda-teal rounded-full flex-shrink-0"></span>
                <Link href="/apply" className="text-koda-teal underline hover:text-koda-tealLight">
                  /apply — Caregiver Job Application Form
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-koda-teal rounded-full flex-shrink-0"></span>
                <Link href="/contact" className="text-koda-teal underline hover:text-koda-tealLight">
                  /contact — Agency Inquiry &amp; Care Request Form
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
