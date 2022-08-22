import { RemainingTimes } from 'src/values'

export interface CountdownPublisher {
  refresh: (currentTime: Date) => void
  subscribe: (subscriber: Subscriber) => void
}

export interface Subscriber {
  update: (remainingTimes: RemainingTimes) => void
}
