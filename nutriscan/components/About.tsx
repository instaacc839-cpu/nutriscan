'use client'

import { motion } from 'framer-motion'
import { Brain, Leaf, Zap, Heart } from 'lucide-react'

const values = [
  {
    icon: Brain,
    title: 'AI-First Analysis',
    desc: 'Powered by advanced vision models trained on millions of food images for industry-leading accuracy.',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    desc: 'From upload to full nutrition breakdown in under 3 seconds. No waiting, no friction.',
  },
  {
    icon: Leaf,
    title: 'Science-Backed',
    desc: 'Every recommendation is grounded in peer-reviewed nutritional science, not influencer trends.',
  },
  {
    icon: Heart,
    title: 'Built for You',
    desc: 'Personalized insights based on your goals — whether you\'re building muscle or losing weight.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-green-950/15 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-green-400 text-sm font-medium mb-8">
              <Leaf className="w-3.5 h-3.5" />
              About NutriScan
            </div>
            <h2 className="text-4xl md:text-5xl font-display leading-tight mb-6">
              Food intelligence
              <br />
              <span className="gradient-text italic">for everyone.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-6">
              We believe everyone deserves to understand what they eat. NutriScan makes nutritional
              expertise accessible to anyone with a phone — no dietitian required.
            </p>
            <p className="text-white/35 leading-relaxed">
              Built with cutting-edge computer vision and large language models, NutriScan
              analyzes your food with the depth of a nutritionist and the speed of a calculator.
              Eat smarter, live better.
            </p>
          </motion.div>

          {/* Right — feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-5 hover:bg-white/[0.04] hover:border-green-500/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 group-hover:bg-green-500/15 flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-sm font-medium text-white/90 mb-2">{v.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed">{v.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
