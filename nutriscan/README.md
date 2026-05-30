# NutriScan 🌿

AI-powered food nutrition scanner. Upload any food photo and get instant analysis.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click **Deploy** — that's it. Live in ~60 seconds.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

## Features

- 🥑 Drag-and-drop food image upload
- ✨ AI nutrition analysis (mock data — swap for real AI API)
- 📊 Health score, macros, goals compatibility
- 📈 Dashboard with recent scans & trending foods
- 📱 Fully responsive, mobile-first
- 🌙 Dark mode with glassmorphism design

## Connecting Real AI

To use real AI analysis, replace `getRandomMockResult()` in `components/Scanner.tsx` with a call to your API route that uses Claude's vision API or OpenAI GPT-4o.

Example API route at `app/api/analyze/route.ts`:

```ts
import Anthropic from '@anthropic-ai/sdk'

export async function POST(req: Request) {
  const { imageBase64 } = await req.json()
  const client = new Anthropic()
  
  const response = await client.messages.create({
    model: 'claude-opus-4-5',
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: [
        { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: imageBase64 } },
        { type: 'text', text: 'Analyze this food image and return nutrition data as JSON...' }
      ]
    }]
  })
  
  return Response.json({ result: response.content[0].text })
}
```
