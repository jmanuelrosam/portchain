export interface Vessel {
  imo: number
  name: string
}

export async function getVessels (url: string): Promise<Vessel[]> {
  return fetch(url)
    .then(async (res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch Vessels')
      }

      return res.json()
    })
}
