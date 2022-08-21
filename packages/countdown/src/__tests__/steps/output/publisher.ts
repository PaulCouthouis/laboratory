import { Subscriber } from 'src/ports/output'

export const buildFakeCountdownPublisher = () => {
  let subscribers: Set<Subscriber>

  const initSubscribers = (initialSubscribers: Set<Subscriber>) => {
    subscribers = initialSubscribers
  }

  const subscribe = (subscriber: Subscriber) => {
    subscribers.add(subscriber)
  }

  const getSubscribersSize = () => subscribers.size

  return { initSubscribers, subscribe, getSubscribersSize }
}
