import type {
  CountdownPublisher,
  CountdownRepository,
  UpdateWithRemainingTimes,
} from './output'

export const buildCountdownActions = (
  countdownRepository: CountdownRepository
) => {
  const refreshCountdown = (currentTime: Date) => {
    countdownRepository.refresh(currentTime)
  }

  const showCountdown = () => {
    return countdownRepository.show()
  }

  return { refreshCountdown, showCountdown }
}

export const buildCountdownActions2 = (
  countdownPublisher: CountdownPublisher
) => {
  const observeCountdown = (update: UpdateWithRemainingTimes) => {
    countdownPublisher.subscribe(update)
  }

  return { observeCountdown }
}
