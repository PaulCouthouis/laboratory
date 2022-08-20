import { RemainingTimes } from 'src/values'

export interface CountdownRepository {
  readonly show: () => RemainingTimes
}
