import { buildCountdown, Countdown } from 'src/entities'
import type { RemainingTimes } from 'src/values'

export const buildFakeCountdownRepository = () => {
  let countdown: Countdown
  let remainingTimes: RemainingTimes

  const initFinalTime = (initialFinalTime: Date) => {
    countdown = buildCountdown(initialFinalTime)
  }

  const initRemainingTimes = (initialRemainigTimes: RemainingTimes) => {
    remainingTimes = initialRemainigTimes
  }

  const refresh = (currentTime: Date) => {
    remainingTimes = countdown.calculateRemainingTime(currentTime)
  }

  const show = () => {
    return remainingTimes
  }

  return { initFinalTime, initRemainingTimes, show, refresh }
}
