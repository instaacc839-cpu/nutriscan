import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, mimeType } = await req.json()

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [
              {
                inline_data: {
                  mime_type: mimeType,
                  data: imageBase64
                }
              },
              {
                text: `Analyze this food image and respond with ONLY a JSON object, no markdown, no backticks, just raw JSON:
{
  "foodName": "name of the food",
  "emoji": "relevant emoji",
  "healthScore": 7.5,
  "calories": 350,
  "protein": 12,
  "carbs": 45,
  "fat": 14,
  "sugar": 8,
  "fiber": 4,
  "goodForMuscleGain": true,
  "goodForWeightLoss": false,
  "aiExplanation": "2-3 sentence explanation of the nutritional value",
  "tags": ["tag1", "tag2"],
  "alternatives": [
    {"name": "alternative food", "emoji": "emoji", "reason": "why it's better", "calories": 300}
  ]
}`
              }
            ]
          }]
        })
      }
    )

    const data = await response.json()
    const text = data.candidates[0].content.parts[0].text
    const result = JSON.parse(text)
    return NextResponse.json(result)
  } catch (e) {
    return NextResponse.json({ error: 'Analysis failed' }, { status: 500 })
  }
}
