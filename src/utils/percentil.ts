// Algorithm from NIST
// url: http://www.itl.nist.gov/div898/handbook/prc/section2/prc262.htm

export function percentil (array: number[], p: number): string | undefined {
  if (array.length === 0) {
    return undefined
  }

  const rank: number = ((p / 100) * (array.length - 1)) + 1
  const whole: number = Math.trunc(rank)

  const current: number = array[whole - 1] as number
  if (whole === rank) {
    return current.toString()
  } else {
    const next: number = array[whole] ?? (array[array.length - 1]) as number
    const f = Math.abs(rank - whole)

    return ((f * (next - current)) + current).toFixed(2)
  }
}
