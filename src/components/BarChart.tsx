import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

import { PortInfo } from '@/utils/getPortInformation'

export function BarChart (
  { ports, height }:
  { ports: PortInfo[], height: number }
): JSX.Element {
  const portsInfo = ports?.reduce<{ names: string[], calls: number[] }>((acc, port) => ({
    names: [...acc.names, port.name],
    calls: [...acc.calls, port.calls.length]
  }), { names: [], calls: [] })

  const series = [{
    data: portsInfo.calls
  }]

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false
      },
      type: 'bar',
      height: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top'
        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      categories: portsInfo.names
    }
  }

  return (
    <div id='chart'>
      <ReactApexChart
        options={options}
        series={series}
        type='bar'
        height={height}
      />
    </div>
  )
}
