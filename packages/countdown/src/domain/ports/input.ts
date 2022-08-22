import { CountdownPublisher, Subscriber } from './output'

export const buildCountdownActions = (
  countdownPublisher: CountdownPublisher
) => {
  const refreshCountdown = (currentTime: Date) => {
    countdownPublisher.refresh(currentTime)
  }

  const subscribeCountdown = (subscriber: Subscriber) => {
    countdownPublisher.subscribe(subscriber)
  }

  return { refreshCountdown, subscribeCountdown }
}
