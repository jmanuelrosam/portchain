import React from 'react'
import humanizeDuration from 'humanize-duration'

import { getRandomColor } from '@/utils/randomColors'
import { percentil as percentilFn } from '@/utils/percentil'

export function Percentile (
  { data, percentil }:
  { data: number[], percentil: number }
): JSX.Element {
  const randomColor = getRandomColor()

  const percentilNumber = percentilFn(data, percentil)

  return (
    <div className='w-full h-full grid grid-cols-3 items-center justify-center gap-x-8 mb-2'>
      <div
        className='grid h-9 w-9 text-sm place-content-center rounded-full'
        style={{ backgroundColor: randomColor[100], color: randomColor[900] }}
      >
        {percentil}
      </div>
      <div>
        {percentilNumber !== undefined ? percentilNumber : 'N/A'}
      </div>
      <div>
        {percentilNumber !== undefined ? humanizeDuration(Number(percentilNumber)) : ''}
      </div>
    </div>
  )
}
