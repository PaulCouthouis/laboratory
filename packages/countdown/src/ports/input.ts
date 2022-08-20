import type { CountdownRepository } from './output'

export const buildCountdownActions = (
  countdownRepository: CountdownRepository
) => {
  const showCountdown = () => {
    return countdownRepository.show()
  }

  return { showCountdown }
}
