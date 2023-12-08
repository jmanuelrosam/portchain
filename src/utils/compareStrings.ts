export function compareStrings (a: string, b: string): number {
  return new Intl
    .Collator('en-US', { sensitivity: 'base' })
    .compare(a, b)
}
