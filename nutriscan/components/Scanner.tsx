'use client'

import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, ImageIcon, Sparkles, X, CheckCircle2, XCircle, TrendingUp, Scale, Flame, Dumbbell, Droplets, Wheat, Scan } from 'lucide-react'
import { getRandomMockResult, type NutritionResult } from '@/lib/mockData'

type Stage = 'idle' | 'preview' | 'loading' | 'result'

function HealthBar({ value, max = 10, color = 'bg-green-500' }: { value: number; max?: number; color?: string }) {
  const pct = (value / max) * 100
  return (
    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
      <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }} className={`h-full rounded-full ${color}`} />
    </div>
  )
}

function MacroCard({ icon: Icon, label, value, unit, color }: { icon: React.ElementType, label: string, value: number, unit: string, color: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-4 flex flex-col gap-2">
      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${color}`}><Icon className="w-4 h-4" /></div>
      <div>
        <div className="text-xs text-white/40 mb-0.5">{label}</div>
        <div className="text-xl font-medium text-white">{value}<span className="text-sm text-white/40 ml-1">{unit}</span></div>
      </div>
    </motion.div>
  )
}

function LoadingSkeleton() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full skeleton" />
        <div className="space-y-2 flex-1">
          <div className="h-4 w-48 rounded-lg skeleton" />
          <div className="h-3 w-32 rounded-lg skeleton" />
        </div>
      </div>
      <div className="h-24 rounded-2xl skeleton" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[...Array(4)].map((_, i) => <div key={i} className="h-20 rounded-2xl skeleton" />)}
      </div>
      <div className="h-32 rounded-2xl skeleton" />
    </motion.div>
  )
}

function ResultPanel({ result, onReset }: { result: NutritionResult; onReset: () => void }) {
  const scoreColor = result.healthScore >= 8 ? 'text-green-400' : result.healthScore >= 6 ? 'text-yellow-400' : 'text-red-400'
  const scoreBarColor = result.healthScore >= 8 ? 'bg-green-500' : result.healthScore >= 6 ? 'bg-yellow-500' : 'bg-red-500'

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="space-y-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{result.emoji}</span>
          <div>
            <h3 className="text-xl font-medium text-white">{result.foodName}</h3>
            <div className="flex items-center gap-1.5 mt-1">
              {result.tags.map(tag => <span key={tag} className="text-xs px-2 py-0.5 rounded-full glass-green text-green-400">{tag}</span>)}
            </div>
          </div>
        </div>
        <button onClick={onReset} className="w-8 h-8 rounded-xl glass flex items-center justify-center hover:bg-white/[0.08] transition-colors">
          <X className="w-4 h-4 text-white/50" />
        </button>
      </div>
      <div className="glass rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-white/50 font-medium">Health Score</span>
          <span className={`text-3xl ${scoreColor}`}>{result.healthScore}<span className="text-base text-white/30">/10</span></span>
        </div>
        <HealthBar value={result.healthScore} color={scoreBarColor} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <MacroCard icon={Flame} label="Calories" value={result.calories} unit="kcal" color="bg-orange-500/10 text-orange-400" />
        <MacroCard icon={Dumbbell} label="Protein" value={result.protein} unit="g" color="bg-blue-500/10 text-blue-400" />
        <MacroCard icon={Wheat} label="Carbs" value={result.carbs} unit="g" color="bg-amber-500/10 text-amber-400" />
        <MacroCard icon={Droplets} label="Fat" value={result.fat} unit="g" color="bg-purple-500/10 text-purple-400" />
        <MacroCard icon={Scale} label="Sugar" value={result.sugar} unit="g" color="bg-pink-500/10 text-pink-400" />
        <MacroCard icon={TrendingUp} label="Fiber" value={result.fiber} unit="g" color="bg-green-500/10 text-green-400" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className={`glass rounded-2xl p-4 flex items-center gap-3 ${result.goodForMuscleGain ? 'glass-green' : ''}`}>
          {result.goodForMuscleGain ? <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /> : <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />}
          <div>
            <div className="text-xs text-white/40">Muscle Gain</div>
            <div className={`text-sm font-medium ${result.goodForMuscleGain ? 'text-green-400' : 'text-red-400'}`}>{result.goodForMuscleGain ? 'Great choice' : 'Not ideal'}</div>
          </div>
        </div>
        <div className={`glass rounded-2xl p-4 flex items-center gap-3 ${result.goodForWeightLoss ? 'glass-green' : ''}`}>
          {result.goodForWeightLoss ? <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /> : <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />}
          <div>
            <div className="text-xs text-white/40">Weight Loss</div>
            <div className={`text-sm font-medium ${result.goodForWeightLoss ? 'text-green-400' : 'text-red-400'}`}>{result.goodForWeightLoss ? 'Great choice' : 'Not ideal'}</div>
          </div>
        </div>
      </div>
      <div className="glass rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-green-400" />
          <span className="text-sm font-medium text-green-400">AI Analysis</span>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">{result.aiExplanation}</p>
      </div>
      <div>
        <div className="text-sm font-medium text-white/50 mb-3">Healthier Alternatives</div>
        <div className="grid gap-2">
          {result.alternatives.map((alt) => (
            <motion.div key={alt.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="glass rounded-xl p-3 flex items-center justify-between hover:bg-white/[0.04] transition-colors cursor-default">
              <div className="flex items-center gap-3">
                <span className="text-xl">{alt.emoji}</span>
                <div>
                  <div className="text-sm font-medium text-white/80">{alt.name}</div>
                  <div className="text-xs text-white/40">{alt.reason}</div>
                </div>
              </div>
              <div className="text-sm font-medium text-green-400">{alt.calories} kcal</div>
            </motion.div>
          ))}
        </div>
      </div>
      <button onClick={onReset} className="w-full py-3 rounded-2xl glass hover:bg-white/[0.06] text-white/60 hover:text-white text-sm transition-all">
        Scan Another Food
      </button>
    </motion.div>
  )
}

export default function Scanner() {
  const [stage, setStage] = useState<Stage>('idle')
  const [preview, setPreview] = useState<string | null>(null)
  const [result, setResult] = useState<NutritionResult | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const fileRef = useRef<File | null>(null)

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve((reader.result as string).split(',')[1])
      reader.onerror = reject
      reader.readAsDataURL(file)
    })

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) return
    fileRef.current = file
    const url = URL.createObjectURL(file)
    setPreview(url)
    setStage('preview')
  }, [])

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }, [handleFile])

  const analyze = async () => {
    setStage('loading')
    try {
      if (fileRef.current) {
        const base64 = await toBase64(fileRef.current)
        const res = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imageBase64: base64, mimeType: fileRef.current.type })
        })
        const data = await res.json()
        if (data.error) throw new Error(data.error)
        setResult(data)
      } else {
        setResult(getRandomMockResult())
      }
      setStage('result')
    } catch (e) {
      setResult(getRandomMockResult())
      setStage('result')
    }
  }

  const reset = () => {
    setStage('idle')
    setPreview(null)
    setResult(null)
    fileRef.current = null
  }

  return (
    <section id="scanner" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-green-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-green-400 text-sm font-medium mb-6">
            <Scan className="w-3.5 h-3.5" />Food Scanner
          </div>
          <h2 className="text-4xl md:text-5xl leading-tight mb-4">Upload. Analyze. <span className="gradient-text italic">Understand.</span></h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">Drop any food photo and our AI will break down every nutritional detail in seconds.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="max-w-2xl mx-auto">
          <div className="glass rounded-3xl p-6 md:p-8">
            <AnimatePresence mode="wait">
              {stage === 'idle' && (
                <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }} onDragLeave={() => setIsDragging(false)} onDrop={onDrop} onClick={() => inputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${isDragging ? 'border-green-400 bg-green-500/10' : 'border-white/[0.1] hover:border-green-500/40 hover:bg-white/[0.02]'}`}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors ${isDragging ? 'bg-green-500/20' : 'glass'}`}>
                      <Upload className={`w-7 h-7 ${isDragging ? 'text-green-400' : 'text-white/40'}`} />
                    </div>
                    <p className="text-white/80 font-medium mb-1">Drop your food photo here</p>
                    <p className="text-white/30 text-sm">or click to browse — JPG, PNG, WebP</p>
                    <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
                  </div>
                  <div className="mt-6">
                    <p className="text-xs text-white/30 mb-3 text-center">Or try with a sample</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {['🥑 Avocado Toast', '🐟 Grilled Salmon', '🍔 Cheeseburger', '🫙 Yogurt Parfait'].map((item) => (
                        <button key={item} onClick={analyze} className="px-3 py-1.5 rounded-xl glass text-sm text-white/50 hover:text-white hover:bg-white/[0.06] transition-all">{item}</button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              {stage === 'preview' && preview && (
                <motion.div key="preview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video">
                    <img src={preview} alt="Food preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <button onClick={reset} className="absolute top-3 right-3 w-8 h-8 rounded-xl glass flex items-center justify-center"><X className="w-4 h-4" /></button>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <ImageIcon className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-white/60">Image ready for analysis</span>
                  </div>
                  <button onClick={analyze} className="w-full py-4 rounded-2xl bg-green-500 hover:bg-green-400 text-black font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-green-500/20 active:scale-95">
                    <Sparkles className="w-5 h-5" />Analyze with AI
                  </button>
                </motion.div>
              )}
              {stage === 'loading' && (
                <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="text-center py-6 mb-6">
                    <div className="w-16 h-16 rounded-2xl glass-green glow-green mx-auto flex items-center justify-center mb-4">
                      <Sparkles className="w-7 h-7 text-green-400 animate-spin" />
                    </div>
                    <p className="text-white/60 text-sm">AI is analyzing your food...</p>
                  </div>
                  <LoadingSkeleton />
                </motion.div>
              )}
              {stage === 'result' && result && (
                <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <ResultPanel result={result} onReset={reset} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
