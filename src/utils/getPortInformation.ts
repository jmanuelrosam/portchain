import { type Schedule } from '@/api/getSchedules'
import { compareStrings } from '@/utils/compareStrings'

export interface PortInformation {
  arrival: string
  departure: string
}

export interface PortInfo {
  name: string
  calls: PortInformation[]
}

export function getPortInformation (vessels: Schedule[]): PortInfo[] {
  const callsByPort = vessels
    .reduce<Record<string, PortInformation[]>>(
    (acc, vessel) => {
      vessel.portCalls.forEach(portCall => {
        if (!portCall.isOmitted) {
          const portInfo = acc[portCall.port.name] ?? []
          acc[portCall.port.name] = [
            ...portInfo,
            {
              arrival: portCall.arrival,
              departure: portCall.departure
            }
          ]
        }
      })

      return acc
    },
    {}
  )

  return Object
    .entries(callsByPort)
    .map(([name, calls]) => ({ name, calls }))
    .toSorted((first, second) => {
      if (second.calls.length - first.calls.length !== 0) {
        return second.calls.length - first.calls.length
      }

      return compareStrings(first.name, second.name)
    })
}
