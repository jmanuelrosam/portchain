import React from 'react'

import { BestPorts } from '@/components/BestPorts'
import { Loading } from '@/components/Loading'
import { Card } from '@/components/Card'

import { useVessels } from '@/hooks/useVessels'
import { useSchedules } from '@/hooks/useSchedules'

import { BarChart } from '@/components/BarChart'
import { Select } from '@/components/Select'
import { Percentile } from '@/components/Percentile'

import { getPortInformation } from '@/utils/getPortInformation'
import { compareStrings } from '@/utils/compareStrings'

const PERCENTILES = [5, 20, 50, 75, 90]

export function Dashboard (): JSX.Element {
  const [callsFromPortSelected, setCallsFromPortSelected] = React.useState<number[] | undefined>(undefined)

  const { data: vessels } = useVessels()
  const schedules = useSchedules(vessels)

  if (vessels === undefined || schedules?.data === undefined) {
    return <Loading />
  }

  const ports = getPortInformation(schedules.data)

  const handleSelect = (port?: string): void => {
    if (port === undefined) {
      return setCallsFromPortSelected(undefined)
    }

    const calls = ports.find(p => compareStrings(p.name, port))?.calls
    if (calls === undefined) {
      return setCallsFromPortSelected(undefined)
    }

    setCallsFromPortSelected(
      calls
        .map(call => (new Date(call.departure)).getTime() - (new Date(call.arrival).getTime()))
        .toSorted((first: number, second: number) => first - second)
    )
  }

  return (
    <div className='space-y-4'>
      <div className='grid grid-cols-2 gap-6'>
        <Card>
          <Card.Title>Ports with more calls</Card.Title>
          <BestPorts ports={ports} />
        </Card>
        <Card>
          <Card.Title>Ports with less calls</Card.Title>
          <BestPorts ports={ports?.slice(-5)} />
        </Card>
      </div>

      <Card>
        <Card.Title>Ports</Card.Title>
        <div className='h-64 overflow-y-scroll mr-4'>
          <BarChart ports={ports} height={2000} />
        </div>
      </Card>

      <Card>
        <Card.Title>Percentiles</Card.Title>
        <Select
          ports={ports.map(p => p.name)}
          onSelect={handleSelect}
        />
        <div className='mt-4'>
          {callsFromPortSelected !== undefined
            ? PERCENTILES.map(percentile =>
              <Percentile key={percentile} data={callsFromPortSelected} percentil={percentile} />
            )
            : null}
        </div>
      </Card>
    </div>
  )
}
