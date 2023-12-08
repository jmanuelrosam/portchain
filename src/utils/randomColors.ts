import colors from 'tailwindcss/colors'
import { type DefaultColors } from 'tailwindcss/types/generated/colors'

const EXCLUDED_COLORS = ['inherit', 'current', 'white']

export function getRandomColor (): Record<string, string> {
  const keys: string[] = Object.keys(colors)
    .filter(key => !EXCLUDED_COLORS.includes(key))

  const randomIndex = Math.floor(Math.random() * keys.length)
  const colorName = keys[randomIndex] as keyof DefaultColors
  return colors[colorName] as Record<string, string>
}
