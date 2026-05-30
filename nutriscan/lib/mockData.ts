export interface NutritionResult {
  foodName: string
  emoji: string
  healthScore: number
  calories: number
  protein: number
  carbs: number
  fat: number
  sugar: number
  fiber: number
  goodForMuscleGain: boolean
  goodForWeightLoss: boolean
  aiExplanation: string
  alternatives: Alternative[]
  tags: string[]
}

export interface Alternative {
  name: string
  emoji: string
  reason: string
  calories: number
}

export interface RecentFood {
  name: string
  emoji: string
  healthScore: number
  calories: number
  time: string
  tags: string[]
}

export interface TrendingFood {
  name: string
  emoji: string
  healthScore: number
  category: string
  benefit: string
}

export const MOCK_RESULTS: NutritionResult[] = [
  {
    foodName: 'Avocado Toast',
    emoji: '🥑',
    healthScore: 8.5,
    calories: 320,
    protein: 8,
    carbs: 32,
    fat: 18,
    sugar: 3,
    fiber: 9,
    goodForMuscleGain: true,
    goodForWeightLoss: true,
    aiExplanation: "This is a nutritional powerhouse! The avocado provides heart-healthy monounsaturated fats that keep you satiated for hours, while the whole grain toast delivers complex carbohydrates for sustained energy. The combination offers a solid fiber boost that supports gut health and helps regulate blood sugar. The healthy fat content also enhances absorption of fat-soluble vitamins. A genuinely excellent breakfast or snack choice that balances macronutrients well.",
    alternatives: [
      { name: 'Smashed Pea Toast', emoji: '🫛', reason: 'Higher protein, lower fat', calories: 260 },
      { name: 'Hummus Toast', emoji: '🧆', reason: 'More plant protein', calories: 280 },
      { name: 'Cottage Cheese Toast', emoji: '🍞', reason: 'Much higher protein', calories: 240 },
    ],
    tags: ['High Fiber', 'Healthy Fats', 'Plant-Based'],
  },
  {
    foodName: 'Grilled Salmon',
    emoji: '🐟',
    healthScore: 9.2,
    calories: 412,
    protein: 46,
    carbs: 0,
    fat: 24,
    sugar: 0,
    fiber: 0,
    goodForMuscleGain: true,
    goodForWeightLoss: true,
    aiExplanation: "An elite protein source with exceptional nutritional density. Salmon is packed with omega-3 fatty acids (EPA and DHA) that reduce inflammation, support brain health, and protect cardiovascular function. With 46g of complete protein per serving, it's one of the best muscle-building foods available. The natural fat content is predominantly beneficial — it won't spike insulin and keeps you full. Rich in B vitamins, selenium, and potassium. A near-perfect food for body composition goals.",
    alternatives: [
      { name: 'Tuna Steak', emoji: '🐠', reason: 'Similar protein, fewer calories', calories: 300 },
      { name: 'Sardines', emoji: '🐟', reason: 'More omega-3s, budget-friendly', calories: 280 },
      { name: 'Mackerel', emoji: '🐡', reason: 'Even higher omega-3 content', calories: 380 },
    ],
    tags: ['High Protein', 'Omega-3 Rich', 'Keto-Friendly'],
  },
  {
    foodName: 'Cheeseburger',
    emoji: '🍔',
    healthScore: 3.8,
    calories: 720,
    protein: 34,
    carbs: 48,
    fat: 42,
    sugar: 8,
    fiber: 2,
    goodForMuscleGain: false,
    goodForWeightLoss: false,
    aiExplanation: "High in calories and saturated fat, this is an occasional treat rather than a regular meal. While the beef patty provides decent protein, the overall nutrient-to-calorie ratio is poor. The refined white bun spikes blood sugar quickly, and the processed cheese adds saturated fats with minimal nutritional benefit. High sodium content may cause water retention. Not ideal for fitness goals, but enjoyed occasionally as part of a balanced diet, it won't derail progress entirely.",
    alternatives: [
      { name: 'Turkey Burger', emoji: '🦃', reason: '40% fewer calories, less fat', calories: 420 },
      { name: 'Veggie Burger', emoji: '🥗', reason: 'Higher fiber, lower saturated fat', calories: 380 },
      { name: 'Lettuce-Wrap Burger', emoji: '🥬', reason: 'Same protein, no refined carbs', calories: 480 },
    ],
    tags: ['High Calorie', 'High Saturated Fat', 'Treat Food'],
  },
  {
    foodName: 'Greek Yogurt Parfait',
    emoji: '🫙',
    healthScore: 8.8,
    calories: 285,
    protein: 22,
    carbs: 38,
    fat: 4,
    sugar: 18,
    fiber: 4,
    goodForMuscleGain: true,
    goodForWeightLoss: true,
    aiExplanation: "An excellent balance of protein, probiotics, and natural sugars. Greek yogurt delivers casein protein — a slow-digesting protein that feeds muscles for hours, making it ideal before bed. The live cultures support a healthy gut microbiome, which is increasingly linked to metabolic health. Berries add antioxidants and natural sweetness without excessive calories. The granola provides crunch and energy. A genuinely smart choice for both taste and nutrition.",
    alternatives: [
      { name: 'Plain Greek Yogurt', emoji: '🥛', reason: 'Lower sugar, same protein', calories: 180 },
      { name: 'Skyr', emoji: '🫙', reason: 'Even higher protein, Icelandic style', calories: 200 },
      { name: 'Chia Pudding', emoji: '🌱', reason: 'More fiber and omega-3s', calories: 240 },
    ],
    tags: ['High Protein', 'Probiotic', 'Low Fat'],
  },
]

export const RECENT_FOODS: RecentFood[] = [
  { name: 'Acai Bowl', emoji: '🫐', healthScore: 7.8, calories: 380, time: '2h ago', tags: ['Antioxidants'] },
  { name: 'Chicken Caesar', emoji: '🥗', healthScore: 7.2, calories: 450, time: '6h ago', tags: ['High Protein'] },
  { name: 'Matcha Latte', emoji: '🍵', healthScore: 6.5, calories: 180, time: 'Yesterday', tags: ['Antioxidants'] },
  { name: 'Overnight Oats', emoji: '🌾', healthScore: 8.4, calories: 340, time: 'Yesterday', tags: ['High Fiber'] },
  { name: 'Protein Smoothie', emoji: '🥤', healthScore: 8.9, calories: 290, time: '2 days ago', tags: ['High Protein'] },
  { name: 'Brown Rice Bowl', emoji: '🍚', healthScore: 7.6, calories: 520, time: '2 days ago', tags: ['Complex Carbs'] },
]

export const TRENDING_FOODS: TrendingFood[] = [
  { name: 'Kimchi', emoji: '🥬', healthScore: 9.1, category: 'Fermented', benefit: 'Gut health superstar' },
  { name: 'Quinoa', emoji: '🌾', healthScore: 9.0, category: 'Grain', benefit: 'Complete amino acid profile' },
  { name: 'Walnuts', emoji: '🪨', healthScore: 8.9, category: 'Nuts', benefit: 'Best nut for brain health' },
  { name: 'Blueberries', emoji: '🫐', healthScore: 9.3, category: 'Fruit', benefit: 'Highest antioxidant density' },
  { name: 'Tempeh', emoji: '🫘', healthScore: 9.0, category: 'Protein', benefit: 'Fermented plant protein' },
  { name: 'Sardines', emoji: '🐟', healthScore: 9.4, category: 'Fish', benefit: 'Omega-3 powerhouse' },
]

export function getRandomMockResult(): NutritionResult {
  return MOCK_RESULTS[Math.floor(Math.random() * MOCK_RESULTS.length)]
}
