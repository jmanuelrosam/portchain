export interface Vessel {
  imo: number
  name: string
}

export async function getVessels (url: string): Promise<Vessel[]> {
  return await fetch(url)
    .then(async (res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch Vessels')
      }

      return await res.json()
    })
}
