import type { RemainingTimes } from 'src/values'

import { expect } from 'vitest'
import { buildCountdownActions } from 'src/ports/input'
import { buildFakeCountdownRepository } from './repositories'

export const buildCountdownTestSteps = () => {
  const fakeCountdownRepository = buildFakeCountdownRepository()
  const { refreshCountdown, showCountdown } = buildCountdownActions(
    fakeCountdownRepository
  )

  let receiptedRemainingTimes: RemainingTimes

  const givenCountdownWithRemainingTimes = (
    initialRemainingTimes: RemainingTimes
  ) => {
    fakeCountdownRepository.initRemainingTimes(initialRemainingTimes)
  }

  const givenFinalTimeIs = (initialFinalTime: Date) => {
    fakeCountdownRepository.initFinalTime(initialFinalTime)
  }

  const whenUserShowsCountdown = () => {
    receiptedRemainingTimes = showCountdown()
  }

  const whenCurrentTimeIs = (currentTime: Date) => {
    refreshCountdown(currentTime)
  }

  const thenDisplayedRemainingTimesIs = (
    expectedRemainigTimes: RemainingTimes
  ) => {
    expect(receiptedRemainingTimes).toEqual(expectedRemainigTimes)
  }

  const thenRemainingTimesIsUpdatedWith = (
    expectedRemainigTimes: RemainingTimes
  ) => {
    expect(fakeCountdownRepository.show()).toEqual(expectedRemainigTimes)
  }

  return {
    givenFinalTimeIs,
    givenCountdownWithRemainingTimes,
    whenUserShowsCountdown,
    whenCurrentTimeIs,
    thenDisplayedRemainingTimesIs,
    thenRemainingTimesIsUpdatedWith,
  }
}
