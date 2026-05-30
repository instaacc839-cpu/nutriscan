import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NutriScan — AI Food Intelligence',
  description: 'Scan any food and get instant AI-powered nutrition analysis. Know exactly what you eat.',
  keywords: 'nutrition, food scanner, AI, health, calories, macros',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#080c0a] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
