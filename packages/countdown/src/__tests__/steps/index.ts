import { buildCountdownActions } from 'src/ports/input'
import { Subscriber } from 'src/ports/output'
import { expect } from 'vitest'
import { buildFakeCountdownPublisher } from './output/publisher'

export const buildSteps = () => {
  const fakeCountdownPublisher = buildFakeCountdownPublisher()
  const { subscribeCountdown } = buildCountdownActions(fakeCountdownPublisher)

  const givenCountdownWithSubscribers = (subscribers: Array<Subscriber>) => {
    fakeCountdownPublisher.initSubscribers(subscribers)
  }

  const whenUserSubscribesWith = (subscriber: Subscriber) => {
    subscribeCountdown(subscriber)
  }

  const thenCountdownSubscribersSizeIs = (expectedSize: number) => {
    const receiptedSize = fakeCountdownPublisher.getSubscribersSize()
    expect(receiptedSize).toBe(expectedSize)
  }

  return {
    givenCountdownWithSubscribers,
    whenUserSubscribesWith,
    thenCountdownSubscribersSizeIs,
  }
}
