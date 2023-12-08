import { Schedule } from '@/api/getSchedules'

export const schedules: Array<Omit<Schedule, 'logEntries'>> = [{
  vessel: {
    imo: 9303807,
    name: 'ABIDJAN EXPRESS'
  },
  portCalls: [
    {
      arrival: '2019-01-12T03:42:00+00:00',
      departure: '2019-01-12T20:48:00+00:00',
      createdDate: '2018-10-23T00:00:59.510081+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'BEANR',
        name: 'Antwerpen'
      },
      logEntries: []
    },
    {
      arrival: '2019-01-14T05:18:00+00:00',
      departure: '2019-01-14T18:00:00+00:00',
      createdDate: '2018-10-23T00:01:00.043793+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'DEHAM',
        name: 'Hamburg'
      },
      logEntries: []
    },
    {
      arrival: '2019-01-18T21:48:00+00:00',
      departure: '2019-01-19T22:54:00+00:00',
      createdDate: '2018-11-05T00:01:51.61368+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'MACAS',
        name: 'Casablanca'
      },
      logEntries: []
    },
    {
      arrival: '2019-01-22T02:10:00+00:00',
      departure: '2019-01-22T23:50:00+00:00',
      createdDate: '2018-11-05T00:01:53.878941+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'MAPTM',
        name: 'Tanger Med'
      },
      logEntries: []
    },
    {
      arrival: '2019-01-29T19:45:00+00:00',
      departure: '2019-01-31T02:54:00+00:00',
      createdDate: '2018-11-05T00:01:56.273998+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'GHTEM',
        name: 'Tema'
      },
      logEntries: []
    },
    {
      arrival: '2019-02-03T13:12:00+00:00',
      departure: '2019-02-05T11:54:00+00:00',
      createdDate: '2018-11-05T00:01:58.28919+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'CIABJ',
        name: 'Abidjan'
      },
      logEntries: []
    },
    {
      arrival: '2019-02-15T21:18:00+00:00',
      departure: '2019-02-16T08:18:00+00:00',
      createdDate: '2018-11-23T00:38:54.104811+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'MAPTM',
        name: 'Tanger Med'
      },
      logEntries: []
    },
    {
      arrival: '2019-02-19T16:36:00+00:00',
      departure: '2019-02-20T09:30:00+00:00',
      createdDate: '2018-11-23T00:38:54.820987+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'BEANR',
        name: 'Antwerpen'
      },
      logEntries: []
    },
    {
      arrival: '2019-02-21T13:12:00+00:00',
      departure: '2019-02-22T03:00:00+00:00',
      createdDate: '2018-11-23T00:38:55.771899+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'DEHAM',
        name: 'Hamburg'
      },
      logEntries: []
    },
    {
      arrival: '2019-02-27T02:20:00+00:00',
      departure: '2019-02-28T01:30:00+00:00',
      createdDate: '2018-12-10T00:52:10.122029+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'MACAS',
        name: 'Casablanca'
      },
      logEntries: []
    },
    {
      arrival: '2019-02-28T18:46:00+00:00',
      departure: '2019-03-01T14:00:00+00:00',
      createdDate: '2018-12-10T00:52:11.059222+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'MAPTM',
        name: 'Tanger Med'
      },
      logEntries: []
    },
    {
      arrival: '2019-03-11T06:00:00+00:00',
      departure: '2019-03-12T14:54:00+00:00',
      createdDate: '2018-12-10T00:52:11.752626+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'GHTEM',
        name: 'Tema'
      },
      logEntries: []
    },
    {
      arrival: '2019-03-13T15:12:00+00:00',
      departure: '2019-03-15T09:06:00+00:00',
      createdDate: '2018-12-10T00:52:12.681241+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'CIABJ',
        name: 'Abidjan'
      },
      logEntries: []
    },
    {
      arrival: '2019-03-22T07:42:00+00:00',
      departure: '2019-03-22T20:06:00+00:00',
      createdDate: '2018-12-30T00:09:54.654904+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'MAPTM',
        name: 'Tanger Med'
      },
      logEntries: []
    },
    {
      arrival: '2019-03-26T03:54:00+00:00',
      departure: '2019-03-27T04:48:00+00:00',
      createdDate: '2018-12-30T00:09:55.426152+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'BEANR',
        name: 'Antwerpen'
      },
      logEntries: []
    },
    {
      arrival: '2019-03-28T07:00:00+00:00',
      departure: '2019-03-29T14:06:00+00:00',
      createdDate: '2018-12-30T00:09:56.636825+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'DEHAM',
        name: 'Hamburg'
      },
      logEntries: []
    },
    {
      arrival: '2019-04-02T22:24:00+00:00',
      departure: '2019-04-03T14:00:00+00:00',
      createdDate: '2019-01-15T00:11:46.980856+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'MACAS',
        name: 'Casablanca'
      },
      logEntries: []
    },
    {
      arrival: '2019-04-08T06:25:00+00:00',
      departure: '2019-04-09T04:10:00+00:00',
      createdDate: '2019-01-15T00:11:47.88278+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'MAPTM',
        name: 'Tanger Med'
      },
      logEntries: []
    },
    {
      arrival: '2019-04-17T18:00:00+00:00',
      departure: '2019-04-19T02:35:00+00:00',
      createdDate: '2019-01-15T00:11:48.586991+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'GHTEM',
        name: 'Tema'
      },
      logEntries: []
    },
    {
      arrival: '2019-04-20T21:12:00+00:00',
      departure: '2019-04-22T03:06:00+00:00',
      createdDate: '2019-01-15T00:11:49.523826+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'CIABJ',
        name: 'Abidjan'
      },
      logEntries: []
    },
    {
      arrival: '2019-05-04T04:42:00+00:00',
      departure: '2019-05-04T22:06:00+00:00',
      createdDate: '2019-02-04T00:04:39.314508+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'MAPTM',
        name: 'Tanger Med'
      },
      logEntries: []
    },
    {
      arrival: '2019-05-07T06:00:00+00:00',
      departure: '2019-05-07T18:00:00+00:00',
      createdDate: '2019-02-22T00:25:32.455274+00:00',
      isOmitted: true,
      service: 'West Africa Express 1',
      port: {
        id: 'MACAS',
        name: 'Casablanca'
      },
      logEntries: []
    },
    {
      arrival: '2019-05-08T07:00:00+00:00',
      departure: '2019-05-09T01:00:00+00:00',
      createdDate: '2019-02-22T00:25:32.460062+00:00',
      isOmitted: true,
      service: 'West Africa Express 1',
      port: {
        id: 'MAPTM',
        name: 'Tanger Med'
      },
      logEntries: []
    },
    {
      arrival: '2019-05-09T07:48:00+00:00',
      departure: '2019-05-10T08:36:00+00:00',
      createdDate: '2019-02-04T00:04:39.336527+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'BEANR',
        name: 'Antwerpen'
      },
      logEntries: []
    },
    {
      arrival: '2019-05-12T22:12:00+00:00',
      departure: '2019-05-13T12:30:00+00:00',
      createdDate: '2019-02-04T00:04:39.352575+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'DEHAM',
        name: 'Hamburg'
      },
      logEntries: []
    },
    {
      arrival: '2019-05-18T02:06:00+00:00',
      departure: '2019-05-19T01:42:00+00:00',
      createdDate: '2019-04-04T04:07:11.66587+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'MACAS',
        name: 'Casablanca'
      },
      logEntries: []
    },
    {
      arrival: '2019-05-18T12:00:00+00:00',
      departure: '2019-05-19T14:00:00+00:00',
      createdDate: '2019-02-22T00:25:32.464818+00:00',
      isOmitted: true,
      service: 'West Africa Express 1',
      port: {
        id: 'GHTEM',
        name: 'Tema'
      },
      logEntries: []
    },
    {
      arrival: '2019-05-20T20:36:00+00:00',
      departure: '2019-05-21T17:30:00+00:00',
      createdDate: '2019-04-04T04:07:11.673328+00:00',
      isOmitted: false,
      service: 'West Africa Express 1',
      port: {
        id: 'MAPTM',
        name: 'Tanger Med'
      },
      logEntries: []
    },
    {
      arrival: '2019-05-22T06:00:00+00:00',
      departure: '2019-05-23T11:00:00+00:00',
      createdDate: '2019-02-22T00:25:32.47049+00:00',
      isOmitted: true,
      service: 'West Africa Express 1',
      port: {
        id: 'CIABJ',
        name: 'Abidjan'
      },
      logEntries: []
    }
  ]
}]
