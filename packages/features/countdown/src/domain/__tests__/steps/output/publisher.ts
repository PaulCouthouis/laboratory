import { buildCountdown, Countdown } from '../../../entities'
import { Update } from '../../../ports/output'
import { RemainingTimes } from '../../../values'

export const buildFakeCountdownPublisher = () => {
  const subscribers = new Array<Update>()
  let countdown: Countdown

  const initSubscribers = (initialSubscribers: Array<Update>) => {
    subscribers.push(...initialSubscribers)
  }

  const initCountdown = (finalTime: Date) => {
    countdown = buildCountdown(new Date(finalTime))
  }

  const notify = (remainingTimes: RemainingTimes) => {
    subscribers.forEach((update) => {
      update(remainingTimes)
    })
  }

  const refresh = (currentTime: Date) => {
    const remainingTimes = countdown.calculateRemainingTime(currentTime)
    notify(remainingTimes)
  }

  const subscribe = (update: Update) => {
    subscribers.push(update)
  }

  const getSubscribersSize = () => subscribers.length

  return {
    initSubscribers,
    initCountdown,
    refresh,
    subscribe,
    getSubscribersSize,
  }
}
