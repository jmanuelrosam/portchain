import React from 'react'

import { BestPorts } from '@/components/BestPorts'
import { Loading } from '@/components/Loading'
import { Card } from '@/components/Card'

import { useVessels } from '@/hooks/useVessels'
import { useSchedules } from '@/hooks/useSchedules'

import { Schedule } from '@/api/getSchedules'

import { getPortInformation } from '@/utils/getPortInformation'

export function Dashboard (): JSX.Element {
  const { data: vessels } = useVessels()
  const schedules = useSchedules(vessels)

  if (vessels === undefined || schedules?.data === undefined) {
    return <Loading />
  }

  const ports = getPortInformation(schedules.data as Schedule[])

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
    </div>
  )
}
