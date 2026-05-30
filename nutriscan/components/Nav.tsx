'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scan, LayoutDashboard, Home, Info, Menu, X, Leaf } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Scanner', href: '#scanner', icon: Scan },
  { label: 'Dashboard', href: '#dashboard', icon: LayoutDashboard },
  { label: 'About', href: '#about', icon: Info },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080c0a]/90 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
              <Leaf className="w-4 h-4 text-green-400" />
            </div>
            <span className="font-display text-lg font-normal text-white">
              Nutri<span className="text-green-400">Scan</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-xl text-sm text-white/50 hover:text-white hover:bg-white/[0.05] transition-all duration-200 font-body"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#scanner"
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-green-500 hover:bg-green-400 text-black text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-green-500/20 active:scale-95"
            >
              <Scan className="w-3.5 h-3.5" />
              Scan Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 rounded-xl glass flex items-center justify-center"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#080c0a]/95 backdrop-blur-xl border-b border-white/[0.06] p-4"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/[0.05] transition-all"
                  >
                    <Icon className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                )
              })}
              <a
                href="#scanner"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-500 text-black text-sm font-medium"
              >
                <Scan className="w-4 h-4" />
                Scan Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
