import { RemainingTimes } from 'src/domain/values'

export interface CountdownPublisher {
  refresh: (currentTime: Date) => void
  subscribe: (udpate: Update) => void
}

export type Update = (remainingTimes: RemainingTimes) => void
