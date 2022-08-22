import { buildCountdownActions } from 'src/ports/input'
import { RemainingTimes } from 'src/values'
import { describe, expect, it } from 'vitest'
import { buildFakeCountdownPublisher } from './steps/output/publisher'

describe('Refresh countdown', () => {
  it('is outdated', () => {
    const steps = buildSteps()

    steps.givenFinalTimeIs(new Date('2023-08-12T16:00:00'))

    steps.whenCurrentTimeIs(new Date('2023-08-12T16:00:01'))

    steps.thenCountdownNotifiesRemainingTimes({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })

  it('is still 59 second left', () => {
    const steps = buildSteps()

    steps.givenFinalTimeIs(new Date('2023-08-12T16:00:00'))

    steps.whenCurrentTimeIs(new Date('2023-08-12T15:59:01'))

    steps.thenCountdownNotifiesRemainingTimes({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 59,
    })
  })

  it('is still 2 minute 22 seconds left', () => {
    const steps = buildSteps()

    steps.givenFinalTimeIs(new Date('2023-08-12T16:00:00'))

    steps.whenCurrentTimeIs(new Date('2023-08-12T15:57:38'))

    steps.thenCountdownNotifiesRemainingTimes({
      days: 0,
      hours: 0,
      minutes: 2,
      seconds: 22,
    })
  })

  it('is still 3 hours 33 minutes 6 seconds left', () => {
    const steps = buildSteps()

    steps.givenFinalTimeIs(new Date('2023-08-12T16:00:00'))

    steps.whenCurrentTimeIs(new Date('2023-08-12T12:26:54'))

    steps.thenCountdownNotifiesRemainingTimes({
      days: 0,
      hours: 3,
      minutes: 33,
      seconds: 6,
    })
  })

  it('is still 7 days 22 hours 42 minutes 23 seconds left', () => {
    const steps = buildSteps()

    steps.givenFinalTimeIs(new Date('2023-08-12T16:00:00'))

    steps.whenCurrentTimeIs(new Date('2023-08-04T17:17:37'))

    steps.thenCountdownNotifiesRemainingTimes({
      days: 7,
      hours: 22,
      minutes: 42,
      seconds: 23,
    })
  })
})

const buildSteps = () => {
  let receiptedRemainingTimes: RemainingTimes
  const fakeUpdate = (remainingTimes: RemainingTimes) => {
    receiptedRemainingTimes = remainingTimes
  }
  const fakeCountdownPublisher = buildFakeCountdownPublisher()
  const { refreshCountdown } = buildCountdownActions(fakeCountdownPublisher)

  fakeCountdownPublisher.subscribe({ update: fakeUpdate })

  const givenFinalTimeIs = (finalTime: Date) => {
    fakeCountdownPublisher.initCountdown(finalTime)
  }

  const whenCurrentTimeIs = (currentTime: Date) => {
    refreshCountdown(currentTime)
  }

  const thenCountdownNotifiesRemainingTimes = (
    expectedRemainingTimes: RemainingTimes
  ) => {
    expect(receiptedRemainingTimes).toEqual(expectedRemainingTimes)
  }

  return {
    givenFinalTimeIs,
    whenCurrentTimeIs,
    thenCountdownNotifiesRemainingTimes,
  }
}
