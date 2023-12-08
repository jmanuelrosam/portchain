import useSWR, { type SWRResponse } from 'swr'

import { type Vessel } from '@/api/getVessels'
import { type Schedule, getSchedules } from '@/api/getSchedules'

export function useSchedules (vessels?: Vessel[]): SWRResponse<Schedule[]> | undefined {
  return useSWR((vessels != null)
    ? {
        url: `${import.meta.env.VITE_API_URL as string}/schedule`,
        vessels
      }
    : null,
  getSchedules
  )
}
