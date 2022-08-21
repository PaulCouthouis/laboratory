import { CountdownPublisher, Subscriber } from './output'

export const buildCountdownActions = (
  countdownPublisher: CountdownPublisher
) => {
  const subscribeCountdown = (subscriber: Subscriber) => {
    countdownPublisher.subscribe(subscriber)
  }

  return { subscribeCountdown }
}
