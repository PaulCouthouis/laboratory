export interface CountdownPublisher {
  subscribe: (subscriber: Subscriber) => void
}

export interface Subscriber {
  update: () => void
}
