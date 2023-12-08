import React from 'react'
import { type FallbackProps } from 'react-error-boundary'

export function Error ({ error }: FallbackProps): JSX.Element {
  return (
    <div className='bg-white border border-gray-200 text-slate-800 break-words p-5 rounded-md shadow-sm'>
      <p className='text-red-600'>Ups! Somethign happens!</p>
      <p><b>Error</b>: {error.message}</p>
    </div>
  )
}
