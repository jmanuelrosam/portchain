import React from 'react'

import { Card } from '@/components/Card'
import { Loading } from '@/components/Loading'
import { BestPorts } from '@/components/BestPorts'

import { useVessels } from '@/hooks/useVessels'
import { useSchedules } from '@/hooks/useSchedules'
import { getPortInformation } from '@/utils/getPortInformation'

import { type Schedule } from '@/api/getSchedules'

export function App (): JSX.Element {
  const { data: vessels } = useVessels()
  const schedules = useSchedules(vessels)

  if (vessels === undefined || schedules?.data === undefined) {
    return <Loading />
  }

  const ports = getPortInformation(schedules.data as Schedule[])

  return (
    <div className='container m-auto my-8'>
      <h1 className='text-2xl font-semibold mb-4'>Portchain</h1>
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
      </div>
    </div>
  )
}
