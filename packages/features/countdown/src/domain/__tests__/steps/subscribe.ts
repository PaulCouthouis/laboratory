import { expect } from 'vitest'
import { buildCountdownActions } from '../../ports/input'
import { Update } from '../../ports/output'
import { buildFakeCountdownPublisher } from './output/publisher'

export const buildSteps = () => {
  const fakeCountdownPublisher = buildFakeCountdownPublisher()
  const { subscribeCountdown } = buildCountdownActions(fakeCountdownPublisher)

  const givenCountdownWithSubscribers = (updates: Array<Update>) => {
    fakeCountdownPublisher.initSubscribers(updates)
  }

  const whenUserSubscribesWith = (update: Update) => {
    subscribeCountdown(update)
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
