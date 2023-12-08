import React from 'react'

import Card from '@/components/Card'
import Loading from '@/components/Loading'

import { useVessels } from '@/hooks/useVessels'

export function App (): JSX.Element {
  const { data: vessels } = useVessels()

  if (vessels === undefined) {
    return <Loading />
  }

  return (
    <div className='container m-auto my-8'>
      <h1 className='text-2xl font-semibold mb-4'>Portchain</h1>
      <div className='space-y-4'>
        <div className='grid grid-cols-2 gap-6'>
          <Card>
            <Card.Title>Ports with more calls</Card.Title>
          </Card>
          <Card>
            <Card.Title>Ports with less calls</Card.Title>
          </Card>
        </div>
      </div>
    </div>
  )
}
