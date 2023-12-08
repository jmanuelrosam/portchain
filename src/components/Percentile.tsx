import React from 'react'

import { getRandomColor } from '@/utils/randomColors'
import { percentil as percentilFn } from '@/utils/percentil'

export function Percentile (
  { data, percentil }:
  { data: number[], percentil: number }
): JSX.Element {
  const randomColor = getRandomColor()

  return (
    <div className='w-full h-full flex items-center justify-center gap-x-8 mb-2'>
      <div
        className='grid h-9 w-9 text-sm place-content-center rounded-full'
        style={{ backgroundColor: randomColor[100], color: randomColor[900] }}
      >
        {percentil}
      </div>
      <div>
        {percentilFn(data, percentil)}
      </div>
    </div>
  )
}
