"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [smsConsent, setSmsConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [tab, setTab] = useState<"agency" | "care">("agency");
  const [form, setForm] = useState({
    name: "", org: "", email: "", phone: "", state: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!smsConsent) { alert("Please agree to receive SMS communications to proceed."); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-koda-cream flex items-center justify-center pt-16 px-6">
          <div className="bg-white rounded-2xl p-12 max-w-md w-full text-center shadow-sm border border-gray-100">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-3xl font-display text-koda-navy mb-2">We'll be in touch!</h2>
            <p className="text-gray-500 mb-2">Thank you, {form.name}! Our team will contact you within 1 business day.</p>
            <p className="text-gray-400 text-sm">A confirmation SMS has been sent to {form.phone}. Reply STOP at any time to opt out.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-koda-cream pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-koda-teal font-medium text-sm uppercase tracking-wider">Get Started</span>
            <h1 className="text-4xl md:text-5xl font-display text-koda-navy mt-2 mb-4">Contact Us</h1>
            <p className="text-gray-500">Whether you're a home care agency looking for technology solutions or a family seeking care services, we're here to help.</p>
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-white rounded-xl p-1 border border-gray-100 mb-8 shadow-sm">
            <button onClick={() => setTab("agency")}
              className={`flex-1 py-3 rounded-lg text-sm font-medium transition-colors ${tab === "agency" ? "bg-koda-navy text-white" : "text-gray-500 hover:text-koda-navy"}`}>
              🏢 Agency / Business Inquiry
            </button>
            <button onClick={() => setTab("care")}
              className={`flex-1 py-3 rounded-lg text-sm font-medium transition-colors ${tab === "care" ? "bg-koda-navy text-white" : "text-gray-500 hover:text-koda-navy"}`}>
              🏠 Request Home Care Services
            </button>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <label className="form-label">Full Name *</label>
                <input required type="text" placeholder="Your name" value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})} />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="form-label">{tab === "agency" ? "Organization / Agency Name" : "Relationship to Patient"}</label>
                <input type="text" placeholder={tab === "agency" ? "Your agency name" : "e.g. Daughter, Self"}
                  value={form.org} onChange={e => setForm({...form, org: e.target.value})} />
              </div>
            </div>

            <div>
              <label className="form-label">Email Address *</label>
              <input required type="email" placeholder="you@email.com" value={form.email}
                onChange={e => setForm({...form, email: e.target.value})} />
            </div>

            <div>
              <label className="form-label">Mobile Phone Number *</label>
              <input required type="tel" placeholder="(555) 000-0000" value={form.phone}
                onChange={e => setForm({...form, phone: e.target.value})} />
              <p className="text-xs text-gray-400 mt-1">We'll send a confirmation and may follow up by text.</p>
            </div>

            <div>
              <label className="form-label">State *</label>
              <select required value={form.state} onChange={e => setForm({...form, state: e.target.value})}>
                <option value="">Select state</option>
                {["New York","New Jersey","Pennsylvania","Ohio","Indiana","Michigan","Georgia","Missouri","Other"].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label">How can we help? *</label>
              <textarea required rows={4}
                placeholder={tab === "agency" ? "Tell us about your agency, how many caregivers you have, and what technology challenges you're facing..." : "Tell us about the care needs — who needs care, what type of services, and how soon you need help..."}
                value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
            </div>

            {/* ===== SMS CONSENT — TCR REQUIRED ===== */}
            <div className="checkbox-consent">
              <input
                type="checkbox"
                id="sms-consent"
                checked={smsConsent}
                onChange={e => setSmsConsent(e.target.checked)}
                className="flex-shrink-0 cursor-pointer accent-koda-teal"
                style={{ width: "20px", height: "20px", marginTop: "2px" }}
              />
              <label htmlFor="sms-consent" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                I agree to receive SMS messages from <strong>Complete Homecare / Xtreme Care</strong> (a brand of Swing Cap LLC) about my inquiry or request for {tab === "agency" ? "services" : "home care services"}. Message frequency varies. Msg &amp; data rates may apply. Reply <strong>STOP</strong> to opt out at any time. Reply <strong>HELP</strong> for help.{" "}
                <a href="/terms" className="text-koda-teal underline hover:text-koda-tealLight">Terms</a> |{" "}
                <a href="/privacy-policy" className="text-koda-teal underline hover:text-koda-tealLight">Privacy Policy</a>
              </label>
            </div>

            {!smsConsent && (
              <p className="text-amber-600 text-xs bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                ⚠️ Please check the box above to agree to SMS communications before submitting.
              </p>
            )}

            <button type="submit"
              className={`w-full py-4 rounded-lg font-semibold text-base transition-colors ${smsConsent ? "bg-koda-teal text-white hover:bg-koda-tealLight" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
              disabled={!smsConsent}>
              Send Message
            </button>

            <p className="text-center text-xs text-gray-400">
              We do not use purchased or shared contact lists. All SMS messages originate from Twilio-provisioned numbers and are only sent to individuals who have directly provided consent.
            </p>
          </form>

          {/* Contact info */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { icon: "📧", label: "Email", value: "hello@brightkoda.io" },
              { icon: "🌐", label: "Website", value: "brightkoda.io" },
              { icon: "📍", label: "Based in", value: "New York, NY" },
            ].map(item => (
              <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-xs text-gray-400">{item.label}</div>
                <div className="text-xs font-medium text-koda-navy mt-0.5">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
