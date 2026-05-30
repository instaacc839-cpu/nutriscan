import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, mimeType } = await req.json()

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'No API key' }, { status: 500 })
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [
              { inline_data: { mime_type: mimeType, data: imageBase64 } },
              { text: `Analyze this food image and respond with ONLY a JSON object, no markdown, no backticks, just raw JSON: {"foodName":"name","emoji":"emoji","healthScore":7.5,"calories":350,"protein":12,"carbs":45,"fat":14,"sugar":8,"fiber":4,"goodForMuscleGain":true,"goodForWeightLoss":false,"aiExplanation":"explanation here","tags":["tag1"],"alternatives":[{"name":"alt food","emoji":"🥗","reason":"why better","calories":300}]}` }
            ]
          }]
        })
      }
    )

    const data = await response.json()

    if (!data.candidates || !data.candidates[0]) {
      return NextResponse.json({ error: 'No response', raw: data }, { status: 500 })
    }

    const text = data.candidates[0].content.parts[0].text
    const cleaned = text.replace(/```json|```/g, '').trim()
    const result = JSON.parse(cleaned)
    return NextResponse.json(result)

  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
