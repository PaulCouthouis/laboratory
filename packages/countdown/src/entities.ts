import { RemainingTimes } from './values'

export interface Countdown {
  calculateRemainingTime: (currentTime: Date) => RemainingTimes
}

export const buildCountdown: BuildCountdown = (finalTime) => {
  const calculateRemainingTime = (currentTime: Date) => {
    const isOutdated = finalTime < currentTime

    if (isOutdated) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }

    const currentTimestamp = toTimestamp(currentTime)
    const remainingMilliseconds = finalTimestamp - currentTimestamp

    const days = convertToGoodUnit(remainingMilliseconds, ONE_DAY_IN_MS)

    const remainingHoursInMs = remainingMilliseconds % ONE_DAY_IN_MS
    const hours = convertToGoodUnit(remainingHoursInMs, ONE_HOUR_IN_MS)

    const remainingMinutesInMs = remainingMilliseconds % ONE_HOUR_IN_MS
    const minutes = convertToGoodUnit(remainingMinutesInMs, ONE_MINUTE_IN_MS)

    const remainingSecondsInMs = remainingMilliseconds % ONE_MINUTE_IN_MS
    const seconds = convertToGoodUnit(remainingSecondsInMs, ONE_SECOND_IN_MS)

    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }

  const toTimestamp = (date: Date) => {
    return date.getTime()
  }

  const convertToGoodUnit = (oldRemainingTime: number, divider: number) => {
    const newRemainingTime = oldRemainingTime / divider
    const greatestIntegerLess = Math.floor(newRemainingTime)
    return greatestIntegerLess
  }

  const finalTimestamp = toTimestamp(finalTime)

  const ONE_SECOND_IN_MS = 1000
  const ONE_MINUTE_IN_MS = 60 * ONE_SECOND_IN_MS
  const ONE_HOUR_IN_MS = 60 * ONE_MINUTE_IN_MS
  const ONE_DAY_IN_MS = 24 * ONE_HOUR_IN_MS

  return { calculateRemainingTime }
}

type BuildCountdown = (finaleTime: Date) => Countdown
