import { RemainingTimes } from 'src/values'

export interface CountdownRepository {
  readonly refresh: (currentTime: Date) => void
  readonly show: () => RemainingTimes
}
