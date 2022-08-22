import { RemainingTimes } from 'src/values'

export interface CountdownPublisher {
  subscribe: (subscriber: Subscriber) => void
}

export interface Subscriber {
  update: (remainingTimes: RemainingTimes) => void
}
