import React from 'react'

import { getRandomColor } from '@/utils/randomColors'
import { type PortInfo } from '@/utils/getPortInformation'

export function BestPorts (
  { ports }:
  { ports: PortInfo[] }
): JSX.Element {
  const randomColor = getRandomColor()

  return (
    <ul>
      {ports?.slice(0, 5).map((port) => (
        <li key={port.name} className='flex flex-row items-center gap-3 mb-3 text-xs'>
          <div
            className='grid h-9 w-9 shrink-0 place-content-center rounded-md bg-success-light text-base'
            style={{ backgroundColor: randomColor[100], color: randomColor[900] }}
          >
            {port.name.charAt(0)}
          </div>
          <div className='grow'>
            {port.name}
          </div>
          {port.calls.length} calls
        </li>
      ))}
    </ul>
  )
}
