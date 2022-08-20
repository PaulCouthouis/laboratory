import type { CountdownRepository } from './output'

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
