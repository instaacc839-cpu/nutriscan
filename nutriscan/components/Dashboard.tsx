'use client'

import { motion } from 'framer-motion'
import { Clock, TrendingUp, ArrowRight, BarChart3 } from 'lucide-react'
import { RECENT_FOODS, TRENDING_FOODS } from '@/lib/mockData'

function ScoreDot({ score }: { score: number }) {
  const color = score >= 8 ? 'bg-green-400' : score >= 6 ? 'bg-yellow-400' : 'bg-red-400'
  return <span className={`w-1.5 h-1.5 rounded-full ${color} inline-block`} />
}

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-green-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-green-400 text-sm font-medium mb-6">
            <BarChart3 className="w-3.5 h-3.5" />
            Dashboard
          </div>
          <h2 className="text-4xl md:text-5xl font-display leading-tight mb-4">
            Your Nutrition <span className="gradient-text italic">Intelligence.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Track your food history and discover what's trending in health communities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recently Scanned */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-400" />
                <h3 className="font-medium text-white/90">Recently Scanned</h3>
              </div>
              <button className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1 transition-colors">
                View all <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-2">
              {RECENT_FOODS.map((food, i) => (
                <motion.div
                  key={food.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-colors cursor-default group"
                >
                  <span className="text-2xl">{food.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-sm font-medium text-white/80 truncate">{food.name}</span>
                      <ScoreDot score={food.healthScore} />
                    </div>
                    <div className="flex items-center gap-2">
                      {food.tags.map(t => (
                        <span key={t} className="text-xs text-white/30">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-sm font-medium text-white/70">{food.calories} kcal</div>
                    <div className="text-xs text-white/30">{food.time}</div>
                  </div>
                  <div className="w-8 h-8 rounded-xl glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-medium text-green-400">{food.healthScore}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trending Foods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <h3 className="font-medium text-white/90">Trending Healthy</h3>
              </div>
              <span className="text-xs text-white/30 glass px-3 py-1 rounded-full">This week</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {TRENDING_FOODS.map((food, i) => (
                <motion.div
                  key={food.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-2xl p-4 hover:bg-white/[0.04] hover:border-green-500/20 transition-all cursor-default group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-2xl">{food.emoji}</span>
                    <span className="text-xs font-medium text-green-400">{food.healthScore}</span>
                  </div>
                  <div className="text-sm font-medium text-white/80 mb-1">{food.name}</div>
                  <div className="text-xs text-white/30 mb-2">{food.category}</div>
                  <div className="text-xs text-green-400/70">{food.benefit}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Comparison banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 glass rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-display font-medium text-white mb-2">
              Your weekly average: <span className="gradient-text">7.4 / 10</span>
            </h3>
            <p className="text-white/40 text-sm">Up 12% from last week. You're making great choices.</p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            {[
              { label: 'Foods Scanned', value: '18' },
              { label: 'Avg Calories', value: '487' },
              { label: 'Best Score', value: '9.4' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-display font-medium text-green-400">{stat.value}</div>
                <div className="text-xs text-white/30 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
