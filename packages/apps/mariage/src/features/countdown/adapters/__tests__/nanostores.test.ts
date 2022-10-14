import { expect, test } from 'vitest'
import { init } from '../nanostores'

test('nanostores adapter', () => {
  const dates = [
    new Date('2022-08-12 14:29:50'),
    new Date('2022-08-12 14:29:51'),
    new Date('2022-08-12 14:29:52'),
    new Date('2022-08-12 14:29:53'),
    new Date('2022-08-12 14:29:54'),
    new Date('2022-08-12 14:29:55'),
  ]

  const loop = (cb: (startTime: Date) => void) => {
    dates.forEach((date) => cb(date))
  }

  const atom = init(loop, new Date('2023-08-12 16:00:00'))

  expect(atom.get()).toEqual({
    days: 365,
    hours: 1,
    minutes: 30,
    seconds: 5,
  })
})
