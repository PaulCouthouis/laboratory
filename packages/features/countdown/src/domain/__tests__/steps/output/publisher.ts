import { buildCountdown, Countdown } from 'src/domain/entities'
import { Update } from 'src/domain/ports/output'
import { RemainingTimes } from 'src/domain/values'

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
