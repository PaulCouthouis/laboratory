import type { RemainingTimes } from 'src/values'

import { expect } from 'vitest'
import { buildCountdownActions } from 'src/ports/input'
import { buildFakeCountdownRepository } from './repositories'

export const buildShowCountdownTestSteps = () => {
  const fakeCountdownRepository = buildFakeCountdownRepository()
  const fakeCountdownActions = buildCountdownActions(fakeCountdownRepository)
  let receiptedRemainingTimes: RemainingTimes

  const givenCountdownWithRemainingTimes = (
    initialRemainingTimes: RemainingTimes
  ) => {
    fakeCountdownRepository.initRemainingTimes(initialRemainingTimes)
  }

  const whenUserShowsCountdown = () => {
    receiptedRemainingTimes = fakeCountdownActions.showCountdown()
  }

  const thenRemainingTimesIs = (expectedRemainigTimes: RemainingTimes) => {
    expect(receiptedRemainingTimes).toEqual(expectedRemainigTimes)
  }

  return {
    givenCountdownWithRemainingTimes,
    whenUserShowsCountdown,
    thenRemainingTimesIs,
  }
}
