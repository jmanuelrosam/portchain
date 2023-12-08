import { describe, it } from 'node:test'
import assert from 'node:assert'

import { getPortInformation } from './getPortInformation'
import { schedules } from '@/fixtures/schedules'

describe('getPortInformation', () => {
  it('should return an empty array', () => {
    const schedule = [{
      vessel: {
        imo: 9303807,
        name: 'ABIDJAN EXPRESS'
      },
      portCalls: []
    }]

    const result = getPortInformation(schedule)
    assert.deepStrictEqual(result, [])
  })

  it('should return an empty array when dont have schedules', () => {
    const result = getPortInformation([])
    assert.deepStrictEqual(result, [])
  })

  it('should return an array of PortInfo objects', () => {
    const expected = [
      {
        name: 'Tanger Med',
        calls: [
          {
            arrival: '2019-01-22T02:10:00+00:00',
            departure: '2019-01-22T23:50:00+00:00'
          },
          {
            arrival: '2019-02-15T21:18:00+00:00',
            departure: '2019-02-16T08:18:00+00:00'
          },
          {
            arrival: '2019-02-28T18:46:00+00:00',
            departure: '2019-03-01T14:00:00+00:00'
          },
          {
            arrival: '2019-03-22T07:42:00+00:00',
            departure: '2019-03-22T20:06:00+00:00'
          },
          {
            arrival: '2019-04-08T06:25:00+00:00',
            departure: '2019-04-09T04:10:00+00:00'
          },
          {
            arrival: '2019-05-04T04:42:00+00:00',
            departure: '2019-05-04T22:06:00+00:00'
          },
          {
            arrival: '2019-05-20T20:36:00+00:00',
            departure: '2019-05-21T17:30:00+00:00'
          }
        ]
      },
      {
        name: 'Antwerpen',
        calls: [
          {
            arrival: '2019-01-12T03:42:00+00:00',
            departure: '2019-01-12T20:48:00+00:00'
          },
          {
            arrival: '2019-02-19T16:36:00+00:00',
            departure: '2019-02-20T09:30:00+00:00'
          },
          {
            arrival: '2019-03-26T03:54:00+00:00',
            departure: '2019-03-27T04:48:00+00:00'
          },
          {
            arrival: '2019-05-09T07:48:00+00:00',
            departure: '2019-05-10T08:36:00+00:00'
          }
        ]
      },
      {
        name: 'Casablanca',
        calls: [
          {
            arrival: '2019-01-18T21:48:00+00:00',
            departure: '2019-01-19T22:54:00+00:00'
          },
          {
            arrival: '2019-02-27T02:20:00+00:00',
            departure: '2019-02-28T01:30:00+00:00'
          },
          {
            arrival: '2019-04-02T22:24:00+00:00',
            departure: '2019-04-03T14:00:00+00:00'
          },
          {
            arrival: '2019-05-18T02:06:00+00:00',
            departure: '2019-05-19T01:42:00+00:00'
          }
        ]
      },
      {
        name: 'Hamburg',
        calls: [
          {
            arrival: '2019-01-14T05:18:00+00:00',
            departure: '2019-01-14T18:00:00+00:00'
          },
          {
            arrival: '2019-02-21T13:12:00+00:00',
            departure: '2019-02-22T03:00:00+00:00'
          },
          {
            arrival: '2019-03-28T07:00:00+00:00',
            departure: '2019-03-29T14:06:00+00:00'
          },
          {
            arrival: '2019-05-12T22:12:00+00:00',
            departure: '2019-05-13T12:30:00+00:00'
          }
        ]
      },
      {
        name: 'Abidjan',
        calls: [
          {
            arrival: '2019-02-03T13:12:00+00:00',
            departure: '2019-02-05T11:54:00+00:00'
          },
          {
            arrival: '2019-03-13T15:12:00+00:00',
            departure: '2019-03-15T09:06:00+00:00'
          },
          {
            arrival: '2019-04-20T21:12:00+00:00',
            departure: '2019-04-22T03:06:00+00:00'
          }
        ]
      },
      {
        name: 'Tema',
        calls: [
          {
            arrival: '2019-01-29T19:45:00+00:00',
            departure: '2019-01-31T02:54:00+00:00'
          },
          {
            arrival: '2019-03-11T06:00:00+00:00',
            departure: '2019-03-12T14:54:00+00:00'
          },
          {
            arrival: '2019-04-17T18:00:00+00:00',
            departure: '2019-04-19T02:35:00+00:00'
          }
        ]
      }
    ]

    const result = getPortInformation(schedules)
    assert.deepStrictEqual(result, expected)
  })
})
