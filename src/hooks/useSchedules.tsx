import useSWR, { type SWRResponse } from 'swr'

import { type Vessel } from '@/api/getVessels'
import { type Schedule, getSchedules } from '@/api/getSchedules'

export function useSchedules (vessels?: Vessel[]): SWRResponse<Schedule[]> | undefined {
  if (vessels === undefined) {
    return undefined
  }

  return useSWR({
    url: `${import.meta.env.VITE_API_URL as string}/schedule`,
    vessels
  },
  getSchedules
  )
}
