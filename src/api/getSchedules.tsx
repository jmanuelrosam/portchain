import { type Vessel } from '@/api/getVessels'

export interface Port {
  id: string
  name: string

}

export interface LogEntry {
  updatedField: 'departure' | 'arrival'
  arrival: string | null
  departure: string | null
  isOmitted: boolean
  createdDate: string
}

export interface PortCall {
  arrival: string
  departure: string
  createdDate: string
  isOmitted: boolean
  service: string
  port: Port
  logEntries: LogEntry[]
}

export interface Schedule {
  vessel: Vessel
  portCalls: PortCall[]
}

export async function getSchedules (
  { url, vessels }: { url: string, vessels: Vessel[] }
): Promise<Schedule[]> {
  const promises: Array<Promise<Schedule>> = vessels.map(
    async vessel => fetch(`${url}/${vessel.imo}`)
      .then(async r => r.json())
  )
  return await Promise.all(promises)
}
