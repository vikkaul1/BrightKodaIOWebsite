import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-koda-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-koda-teal flex items-center justify-center">
                <span className="text-white font-bold text-sm">BK</span>
              </div>
              <span className="font-display text-xl font-semibold">BrightKoda</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Technology solutions for the home care and senior care industry. A brand of Swing Cap LLC.
            </p>
            <p className="text-white/40 text-xs mt-4">© {new Date().getFullYear()} Swing Cap LLC. All rights reserved.</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/#about" className="text-white/60 text-sm hover:text-koda-tealLight transition-colors">About Us</Link></li>
              <li><Link href="/#products" className="text-white/60 text-sm hover:text-koda-tealLight transition-colors">Products</Link></li>
              <li><Link href="/contact" className="text-white/60 text-sm hover:text-koda-tealLight transition-colors">Contact</Link></li>
              <li><Link href="/apply" className="text-white/60 text-sm hover:text-koda-tealLight transition-colors">Caregiver Jobs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-white/60 text-sm hover:text-koda-tealLight transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/60 text-sm hover:text-koda-tealLight transition-colors">Terms & Conditions</Link></li>
            </ul>
            <div className="mt-6 p-3 bg-white/5 rounded-lg">
              <p className="text-white/50 text-xs leading-relaxed">
                SMS: Reply <strong className="text-white/70">STOP</strong> to opt out, <strong className="text-white/70">HELP</strong> for help. Msg & data rates may apply.
              </p>
            </div>
          </div>
        </div>

        <p className="text-white/30 text-xs mt-6 text-center">
          BrightKoda is a technology brand of Swing Cap LLC · brightkoda.io
        </p>
      </div>
    </footer>
  );
}
