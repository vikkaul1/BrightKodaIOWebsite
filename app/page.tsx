import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="min-h-screen flex items-center relative overflow-hidden bg-koda-navy pt-16">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-10"
            style={{backgroundImage: "radial-gradient(circle at 30% 50%, #0D9488 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F59E0B 0%, transparent 40%)"}} />
          <div className="absolute inset-0"
            style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} />

          <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-koda-teal/20 border border-koda-teal/30 text-koda-tealLight px-4 py-1.5 rounded-full text-sm font-medium mb-8 fade-up">
                <span className="w-2 h-2 bg-koda-tealLight rounded-full animate-pulse"></span>
                Technology for Home Care & Senior Care
              </div>
              <h1 className="text-5xl md:text-7xl font-display text-white leading-tight mb-6 fade-up delay-1">
                Simpler care.<br />
                <span className="text-koda-teal">Smarter tools.</span>
              </h1>
              <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-xl fade-up delay-2">
                BrightKoda builds compliance-ready technology that helps home care and senior care agencies manage caregivers, streamline onboarding, and stay audit-ready — at a price that scales with you.
              </p>
              <div className="flex flex-wrap gap-4 fade-up delay-3">
                <Link href="/contact" className="bg-koda-teal text-white px-8 py-4 rounded-lg font-medium hover:bg-koda-tealLight transition-colors text-base">
                  Request a Demo
                </Link>
                <Link href="/apply" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-colors text-base">
                  Apply as Caregiver
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs flex flex-col items-center gap-2">
            <span>Scroll</span>
            <div className="w-px h-8 bg-white/20 animate-pulse"></div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="bg-koda-teal py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {[
                { num: "8", label: "States Served" },
                { num: "4,000+", label: "Patients Supported" },
                { num: "$185M", label: "Revenue Managed" },
                { num: "100%", label: "Compliance-Ready" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-display font-bold">{s.num}</div>
                  <div className="text-white/80 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="section-pad bg-koda-cream">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-koda-teal font-medium text-sm uppercase tracking-wider">Our Solutions</span>
              <h2 className="text-4xl md:text-5xl font-display text-koda-navy mt-2">Purpose-built for care agencies</h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">Every product we build is shaped by the real needs of caregivers, administrators, and the clients they serve.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📋",
                  title: "Caregiver Onboarding",
                  desc: "Digital onboarding for multi-state compliance. Collect documents, run training, verify credentials — all in one mobile-friendly flow.",
                  tag: "Live"
                },
                {
                  icon: "🩺",
                  title: "CCM / RPM Platform",
                  desc: "Remote patient monitoring and chronic care management tools under Patient Bridge Health. Integrated billing, care plans, and provider oversight.",
                  tag: "Live"
                },
                {
                  icon: "✅",
                  title: "ComplySight",
                  desc: "Multi-state compliance tracking for home care operators. Stay audit-ready across every state you operate in with automated alerts and reporting.",
                  tag: "Beta"
                },
              ].map((p) => (
                <div key={p.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-5">{p.icon}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-display text-koda-navy">{p.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.tag === "Live" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>{p.tag}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-pad bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-koda-teal font-medium text-sm uppercase tracking-wider">About BrightKoda</span>
                <h2 className="text-4xl md:text-5xl font-display text-koda-navy mt-2 mb-6">Innovation shaped by the industry</h2>
                <p className="text-gray-500 leading-relaxed mb-5">
                  BrightKoda is a technology brand of Swing Cap LLC, built by operators who have run home care agencies across 8 states. We don't just understand the technology — we understand the 5am caregiver call-outs, the state audit prep, and the complexity of multi-payer billing.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Our mission is to make care delivery easier, more efficient, and more affordable — so agencies can focus on what matters most: their clients.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Compliance-Ready", "Mobile-First", "Multi-State", "Audit-Friendly", "Affordable"].map(tag => (
                    <span key={tag} className="bg-koda-cream text-koda-navy text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🏥", title: "Home Care LHCSA", desc: "Licensed operations in NY and beyond" },
                  { icon: "👥", title: "Staffing", desc: "Wayne Staffing serving multiple states" },
                  { icon: "🧠", title: "IDD Services", desc: "Behavioral health and waiver programs" },
                  { icon: "📱", title: "Care Management", desc: "CCM & RPM through Patient Bridge" },
                ].map(item => (
                  <div key={item.title} className="bg-koda-cream p-6 rounded-xl border border-gray-100">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h4 className="font-semibold text-koda-navy text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="bg-koda-navy py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display text-white mb-4">Ready to modernize your agency?</h2>
            <p className="text-white/60 mb-8 text-lg">Schedule a free demo and see how BrightKoda can simplify your operations.</p>
            <Link href="/contact" className="bg-koda-teal text-white px-10 py-4 rounded-lg font-medium hover:bg-koda-tealLight transition-colors text-base inline-block">
              Book a Free Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
