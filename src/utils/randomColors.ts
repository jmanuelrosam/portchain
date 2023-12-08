import colors from 'tailwindcss/colors'
import { type DefaultColors } from 'tailwindcss/types/generated/colors'

export function getRandomColor (): Record<string, string> {
  const keys: string[] = Object.keys(colors)
    .filter(key => key !== 'inherit' && key !== 'current')

  const randomIndex = Math.floor(Math.random() * keys.length)
  const colorName = keys[randomIndex] as keyof DefaultColors
  return colors[colorName] as Record<string, string>
}
