import React from 'react'

export function Card ({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <div className='bg-white border border-gray-200 text-slate-800 break-words p-5 rounded-md shadow-sm'>
      {children}
    </div>
  )
}

function CardTitle ({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <h2 className='text-2xl font-semibold mb-4'>{children}</h2>
  )
}

Card.Title = CardTitle
