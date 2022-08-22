import { expect } from 'vitest'
import { buildCountdownActions } from 'src/domain/ports/input'
import { RemainingTimes } from 'src/domain/values'
import { buildFakeCountdownPublisher } from './output/publisher'

export const buildSteps = () => {
  let receiptedRemainingTimes: RemainingTimes
  const fakeUpdate = (remainingTimes: RemainingTimes) => {
    receiptedRemainingTimes = remainingTimes
  }
  const fakeCountdownPublisher = buildFakeCountdownPublisher()
  const { refreshCountdown } = buildCountdownActions(fakeCountdownPublisher)

  fakeCountdownPublisher.subscribe(fakeUpdate)

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
