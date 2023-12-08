import React from 'react'

function Card ({ children }: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <div className='bg-white border border-gray-200 text-slate-800 break-words p-5 rounded-md shadow-sm'>
      {children}
    </div>
  )
}

export default Card
