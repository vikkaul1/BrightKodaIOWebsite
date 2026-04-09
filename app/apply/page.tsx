"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ApplyPage() {
  const [transactionalConsent, setTransactionalConsent] = useState(false);
  const [promotionalConsent, setPromotionalConsent] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    state: "", experience: "", position: "", message: ""
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
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-3xl font-display text-koda-navy mb-2">Application Received!</h2>
            <p className="text-gray-500 mb-2">Thank you, {form.firstName}! We'll review your application and reach out within 2 business days.</p>
            {(transactionalConsent || promotionalConsent) && (
              <p className="text-gray-400 text-sm">You'll receive a confirmation SMS at {form.phone}. Reply STOP at any time to opt out.</p>
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
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-koda-teal font-medium text-sm uppercase tracking-wider">Join Our Team</span>
            <h1 className="text-4xl md:text-5xl font-display text-koda-navy mt-2 mb-4">Apply as a Caregiver</h1>
            <p className="text-gray-500">Complete Homecare / Xtreme Care is actively hiring caregivers across multiple states. Fill out the form below and our team will be in touch.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="form-label">First Name *</label>
                <input required type="text" placeholder="Jane" value={form.firstName}
                  onChange={e => setForm({...form, firstName: e.target.value})} />
              </div>
              <div>
                <label className="form-label">Last Name *</label>
                <input required type="text" placeholder="Smith" value={form.lastName}
                  onChange={e => setForm({...form, lastName: e.target.value})} />
              </div>
            </div>

            {/* Contact */}
            <div>
              <label className="form-label">Email Address *</label>
              <input required type="email" placeholder="jane@email.com" value={form.email}
                onChange={e => setForm({...form, email: e.target.value})} />
            </div>
            <div>
              <label className="form-label">Mobile Phone Number</label>
              <input type="tel" placeholder="(555) 000-0000" value={form.phone}
                onChange={e => setForm({...form, phone: e.target.value})} />
              <p className="text-xs text-gray-400 mt-1">Optional. Only required if you consent to SMS below.</p>
            </div>

            {/* State & Position */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="form-label">State *</label>
                <select required value={form.state} onChange={e => setForm({...form, state: e.target.value})}>
                  <option value="">Select state</option>
                  {["New York","New Jersey","Pennsylvania","Ohio","Indiana","Michigan","Georgia","Missouri"].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="form-label">Position *</label>
                <select required value={form.position} onChange={e => setForm({...form, position: e.target.value})}>
                  <option value="">Select position</option>
                  <option value="hha">Home Health Aide (HHA)</option>
                  <option value="pca">Personal Care Aide (PCA)</option>
                  <option value="cna">Certified Nursing Aide (CNA)</option>
                  <option value="rn">Registered Nurse (RN)</option>
                  <option value="lpn">Licensed Practical Nurse (LPN)</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className="form-label">Years of Experience</label>
              <select value={form.experience} onChange={e => setForm({...form, experience: e.target.value})}>
                <option value="">Select experience</option>
                <option value="0-1">Less than 1 year</option>
                <option value="1-3">1–3 years</option>
                <option value="3-5">3–5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="form-label">Anything else you'd like us to know?</label>
              <textarea rows={3} placeholder="Availability, certifications, preferences..." value={form.message}
                onChange={e => setForm({...form, message: e.target.value})} />
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
              Submit Application
            </button>

            <p className="text-center text-xs text-gray-400">
              By submitting, you confirm the information provided is accurate. We do not sell or share your information with third parties for marketing.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
