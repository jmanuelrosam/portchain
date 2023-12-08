import useSWR, { type SWRResponse } from 'swr'

import { getVessels, type Vessel } from '@/api/getVessels'

export function useVessels (): SWRResponse<Vessel[]> {
  return useSWR(
    `${import.meta.env.VITE_API_URL as string}/vessels`,
    getVessels
  )
}
