import { buildCountdown, Countdown } from 'src/domain/entities'
import { Subscriber } from 'src/domain/ports/output'
import { RemainingTimes } from 'src/domain/values'

export const buildFakeCountdownPublisher = () => {
  const subscribers = new Array<Subscriber>()
  let countdown: Countdown

  const initSubscribers = (initialSubscribers: Array<Subscriber>) => {
    subscribers.push(...initialSubscribers)
  }

  const initCountdown = (finalTime: Date) => {
    countdown = buildCountdown(new Date(finalTime))
  }

  const notify = (remainingTimes: RemainingTimes) => {
    subscribers.forEach((subscriber) => {
      subscriber.update(remainingTimes)
    })
  }

  const refresh = (currentTime: Date) => {
    const remainingTimes = countdown.calculateRemainingTime(currentTime)
    notify(remainingTimes)
  }

  const subscribe = (subscriber: Subscriber) => {
    subscribers.push(subscriber)
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
