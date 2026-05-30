'use client'

import { Leaf, Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-green-400" />
              </div>
              <span className="font-display text-lg">Nutri<span className="text-green-400">Scan</span></span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              AI-powered nutrition intelligence for everyone. Know exactly what you eat, every time.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Twitter, Github, Mail].map((Icon, i) => (
                <button key={i} className="w-8 h-8 rounded-xl glass flex items-center justify-center hover:bg-white/[0.08] transition-colors">
                  <Icon className="w-3.5 h-3.5 text-white/40" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-medium text-white/30 uppercase tracking-widest mb-4">Product</h4>
            <ul className="space-y-2.5">
              {['Scanner', 'Dashboard', 'API', 'Pricing'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-white/30 uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['About', 'Blog', 'Careers', 'Privacy'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">© 2025 NutriScan. All rights reserved.</p>
          <p className="text-xs text-white/20">Not medical advice. Consult a healthcare professional for dietary guidance.</p>
        </div>
      </div>
    </footer>
  )
}
