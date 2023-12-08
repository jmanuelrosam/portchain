import React from 'react'

import Card from '@/components/Card'

export function App (): JSX.Element {
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
