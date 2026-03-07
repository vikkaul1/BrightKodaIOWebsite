"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ApplyPage() {
  const [smsConsent, setSmsConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    state: "", experience: "", position: "", message: ""
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
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-3xl font-display text-koda-navy mb-2">Application Received!</h2>
            <p className="text-gray-500 mb-2">Thank you, {form.firstName}! We'll review your application and reach out within 2 business days.</p>
            <p className="text-gray-400 text-sm">You'll receive a confirmation SMS at {form.phone}. Reply STOP at any time to opt out.</p>
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
              <label className="form-label">Mobile Phone Number *</label>
              <input required type="tel" placeholder="(555) 000-0000" value={form.phone}
                onChange={e => setForm({...form, phone: e.target.value})} />
              <p className="text-xs text-gray-400 mt-1">Used for application updates and scheduling.</p>
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

            {/* ===== SMS CONSENT — TCR REQUIRED ===== */}
            <div className="checkbox-consent">
              <input
                type="checkbox"
                id="sms-consent"
                checked={smsConsent}
                onChange={e => setSmsConsent(e.target.checked)}
                className="w-5 h-5 mt-0.5 flex-shrink-0 accent-koda-teal cursor-pointer"
                style={{ width: "20px", height: "20px" }}
              />
              <label htmlFor="sms-consent" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                I agree to receive SMS messages from <strong>Complete Homecare / Xtreme Care</strong> (a brand of Swing Cap LLC) about my application or request for employment services. Message frequency varies. Msg &amp; data rates may apply. Reply <strong>STOP</strong> to opt out at any time. Reply <strong>HELP</strong> for help.{" "}
                <a href="/terms" className="text-koda-teal underline hover:text-koda-tealLight">Terms</a> |{" "}
                <a href="/privacy-policy" className="text-koda-teal underline hover:text-koda-tealLight">Privacy Policy</a>
              </label>
            </div>

            {!smsConsent && (
              <p className="text-amber-600 text-xs bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                ⚠️ You must check the box above to agree to SMS communications before submitting your application.
              </p>
            )}

            <button type="submit"
              className={`w-full py-4 rounded-lg font-semibold text-base transition-colors ${smsConsent ? "bg-koda-teal text-white hover:bg-koda-tealLight" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
              disabled={!smsConsent}>
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
