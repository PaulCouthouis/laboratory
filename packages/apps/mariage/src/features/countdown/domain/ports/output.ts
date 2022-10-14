import { RemainingTimes } from '../values'

export interface CountdownPublisher {
  refresh: (currentTime: Date) => void
  subscribe: (udpate: Update) => void
}

export type Update = (remainingTimes: RemainingTimes) => void
