'use client'

import { motion } from 'framer-motion'
import { Scan, ArrowRight, Zap, Shield, BarChart3 } from 'lucide-react'

const floatingFoods = [
  { emoji: '🥑', label: 'Avocado', score: 9.2, x: -40, y: 20, delay: 0 },
  { emoji: '🐟', label: 'Salmon', score: 9.4, x: 45, y: -10, delay: 0.4 },
  { emoji: '🫐', label: 'Blueberries', score: 9.1, x: -35, y: 65, delay: 0.8 },
  { emoji: '🥗', label: 'Salad', score: 8.7, x: 50, y: 60, delay: 1.2 },
  { emoji: '🌾', label: 'Quinoa', score: 8.9, x: 0, y: -30, delay: 0.6 },
]

const features = [
  { icon: Zap, label: 'Instant Analysis', desc: 'Results in under 3 seconds' },
  { icon: Shield, label: 'Accurate Data', desc: 'AI-verified nutrition facts' },
  { icon: BarChart3, label: 'Track Progress', desc: 'Monitor your food habits' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-green-950/30 via-transparent to-transparent pointer-events-none" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/5 rounded-full blur-3xl animate-float-delayed pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-green-400 text-sm font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          AI-Powered Nutrition Intelligence
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display leading-[1.05] tracking-tight mb-6"
        >
          Scan Your Food.
          <br />
          <span className="gradient-text italic">Know What's Inside.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Upload any food photo and get instant AI-powered nutrition analysis.
          Calories, macros, health scores, and personalized recommendations — all in seconds.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#scanner"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 text-black font-medium text-base transition-all duration-200 hover:shadow-xl hover:shadow-green-500/25 active:scale-95"
          >
            <Scan className="w-5 h-5" />
            Scan Your Food
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#dashboard"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl glass hover:bg-white/[0.07] text-white/70 hover:text-white text-base transition-all duration-200"
          >
            View Dashboard
          </a>
        </motion.div>

        {/* Floating food cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full max-w-2xl mx-auto h-64 mb-16"
        >
          {/* Center piece */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-3xl glass-green glow-green flex items-center justify-center text-5xl animate-pulse-glow">
              🍽️
            </div>
          </div>

          {/* Orbiting cards */}
          {floatingFoods.map((food, i) => (
            <motion.div
              key={food.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + food.delay }}
              style={{
                position: 'absolute',
                left: `calc(50% + ${food.x}%)`,
                top: `calc(50% + ${food.y}%)`,
                transform: 'translate(-50%, -50%)',
              }}
              className={`glass rounded-2xl p-3 flex items-center gap-2 hover:scale-105 transition-transform cursor-default ${
                i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
              }`}
            >
              <span className="text-2xl">{food.emoji}</span>
              <div>
                <div className="text-xs font-medium text-white/80 leading-none">{food.label}</div>
                <div className="text-xs text-green-400 mt-0.5">{food.score}/10</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.label} className="flex items-center gap-3 glass rounded-2xl px-5 py-3">
                <div className="w-8 h-8 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-white/90">{f.label}</div>
                  <div className="text-xs text-white/40">{f.desc}</div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
