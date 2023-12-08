import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { Dashboard } from '@/layouts/Dashboard'
import { Error } from '@/components/Error'

export function App (): JSX.Element {
  return (
    <div className='container m-auto my-8'>
      <h1 className='text-2xl font-semibold mb-4'>Portchain</h1>
      <ErrorBoundary FallbackComponent={Error}>
        <Dashboard />
      </ErrorBoundary>
    </div>
  )
}
