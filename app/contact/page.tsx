"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [transactionalConsent, setTransactionalConsent] = useState(false);
  const [promotionalConsent, setPromotionalConsent] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [tab, setTab] = useState<"agency" | "care">("agency");
  const [form, setForm] = useState({
    name: "", org: "", email: "", phone: "", state: "", message: ""
  });

  const canSubmit = termsConsent;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsConsent) {
      alert("Please accept the Privacy Policy and Terms & Conditions to proceed.");
      return;
    }
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
            {(transactionalConsent || promotionalConsent) && (
              <p className="text-gray-400 text-sm">A confirmation SMS has been sent to {form.phone}. Reply STOP at any time to opt out.</p>
            )}
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
              <label className="form-label">Mobile Phone Number</label>
              <input type="tel" placeholder="(555) 000-0000" value={form.phone}
                onChange={e => setForm({...form, phone: e.target.value})} />
              <p className="text-xs text-gray-400 mt-1">Optional. Only required if you consent to SMS below.</p>
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
                placeholder={tab === "agency" ? "Tell us about your agency and what technology challenges you're facing..." : "Tell us about the care needs — who needs care, what type of services, and how soon you need help..."}
                value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
            </div>

            {/* ===== SMS CONSENT SECTION ===== */}
            <div className="space-y-4 pt-2">
              <p className="text-sm font-semibold text-koda-navy">SMS Communications (Optional)</p>

              {/* Checkbox 1 — Transactional */}
              <div className="flex items-start gap-3 p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <input
                  type="checkbox"
                  id="transactional-consent"
                  checked={transactionalConsent}
                  onChange={e => setTransactionalConsent(e.target.checked)}
                  className="flex-shrink-0 cursor-pointer accent-koda-teal"
                  style={{ width: "18px", height: "18px", marginTop: "2px" }}
                />
                <label htmlFor="transactional-consent" className="text-xs text-gray-700 leading-relaxed cursor-pointer">
                  By checking, you are allowing to receive <strong>transactional/informational SMS communications</strong> regarding account notifications, customer care, etc, from <strong>Complete Homecare / Xtreme Care</strong> (a brand of Swing Cap LLC). Messages frequency may vary. Message and data rates may apply. Reply <strong>HELP</strong> for help or <strong>STOP</strong> to opt out.
                </label>
              </div>

              {/* Checkbox 2 — Promotional */}
              <div className="flex items-start gap-3 p-4 bg-teal-50 border border-teal-200 rounded-lg">
                <input
                  type="checkbox"
                  id="promotional-consent"
                  checked={promotionalConsent}
                  onChange={e => setPromotionalConsent(e.target.checked)}
                  className="flex-shrink-0 cursor-pointer accent-koda-teal"
                  style={{ width: "18px", height: "18px", marginTop: "2px" }}
                />
                <label htmlFor="promotional-consent" className="text-xs text-gray-700 leading-relaxed cursor-pointer">
                  By checking, you are allowing to receive <strong>promotional/marketing SMS communications</strong> from <strong>Complete Homecare / Xtreme Care</strong> (a brand of Swing Cap LLC). Frequency may vary. Message and data rates may apply. Reply <strong>HELP</strong> for help or <strong>STOP</strong> to opt out.
                </label>
              </div>

              {/* Checkbox 3 — Terms (mandatory) */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <input
                  type="checkbox"
                  id="terms-consent"
                  checked={termsConsent}
                  onChange={e => setTermsConsent(e.target.checked)}
                  className="flex-shrink-0 cursor-pointer accent-koda-teal"
                  style={{ width: "18px", height: "18px", marginTop: "2px" }}
                  required
                />
                <label htmlFor="terms-consent" className="text-xs text-gray-700 leading-relaxed cursor-pointer">
                  By checking, I accept the{" "}
                  <a href="/privacy-policy" className="text-koda-teal underline hover:text-koda-tealLight">Privacy Policy</a>{" "}
                  and{" "}
                  <a href="/terms" className="text-koda-teal underline hover:text-koda-tealLight">Terms &amp; Conditions</a>. *
                  <span className="text-red-500 ml-1">(Required)</span>
                </label>
              </div>
            </div>

            {!termsConsent && (
              <p className="text-amber-600 text-xs bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                ⚠️ You must accept the Privacy Policy and Terms &amp; Conditions before submitting.
              </p>
            )}

            <button type="submit"
              className={`w-full py-4 rounded-lg font-semibold text-base transition-colors ${canSubmit ? "bg-koda-teal text-white hover:bg-koda-tealLight" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
              disabled={!canSubmit}>
              Send Message
            </button>

            <p className="text-center text-xs text-gray-400">
              We do not use purchased or shared contact lists. All SMS messages are only sent to individuals who have directly provided consent.
            </p>
          </form>

          {/* Contact info */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { icon: "📧", label: "Email", value: "hello@brightkoda.org" },
              { icon: "🌐", label: "Website", value: "brightkoda.org" },
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
