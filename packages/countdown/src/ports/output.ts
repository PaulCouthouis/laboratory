import { RemainingTimes } from 'src/values'

export interface CountdownRepository {
  readonly refresh: (currentTime: Date) => void
  readonly show: () => RemainingTimes
}
export interface CountdownPublisher {
  readonly subscribe: (update: UpdateWithRemainingTimes) => void
}

export type UpdateWithRemainingTimes = (remainingTimes: RemainingTimes) => void
