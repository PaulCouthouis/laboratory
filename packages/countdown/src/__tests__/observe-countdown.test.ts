import { buildCountdownActions2 } from 'src/ports/input'
import { RemainingTimes } from 'src/values'
import { describe, expect, it } from 'vitest'
import { buildFakeCountdownPublisher } from './steps/output/publishers'

describe('Observe countdown', () => {
  it('refreshes 1 time', () => {
    const steps = buildSteps()

    steps.givenCountdownNotifyRemainingTimes(
      new Set([
        {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
      ])
    )

    steps.whenUserObservesCountdown()

    steps.thenCountdownRefreshesWith(
      new Set([
        {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
      ])
    )
  })
})

const buildSteps = () => {
  const countdownPublisher = buildFakeCountdownPublisher()
  const { observeCountdown } = buildCountdownActions2(countdownPublisher)
  const receiptedRemainingTimesNotification = new Set<RemainingTimes>()

  const givenCountdownNotifyRemainingTimes = (
    initialRemainingTimesNotifications: Set<RemainingTimes>
  ) => {
    countdownPublisher.initRemainingTimesNotifications(
      initialRemainingTimesNotifications
    )
  }

  const whenUserObservesCountdown = () => {
    const update = (remainingTimes: RemainingTimes) => {
      receiptedRemainingTimesNotification.add(remainingTimes)
    }

    observeCountdown(update)
  }

  const thenCountdownRefreshesWith = (
    expectedRemainingTimesNotification: Set<RemainingTimes>
  ) => {
    expect(receiptedRemainingTimesNotification).toEqual(
      expectedRemainingTimesNotification
    )
  }

  return {
    givenCountdownNotifyRemainingTimes,
    whenUserObservesCountdown,
    thenCountdownRefreshesWith,
  }
}
