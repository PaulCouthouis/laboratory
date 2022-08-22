import { CountdownPublisher, Update } from './output'

export const buildCountdownActions = (
  countdownPublisher: CountdownPublisher
) => {
  const refreshCountdown = (currentTime: Date) => {
    countdownPublisher.refresh(currentTime)
  }

  const subscribeCountdown = (update: Update) => {
    countdownPublisher.subscribe(update)
  }

  return { refreshCountdown, subscribeCountdown }
}
