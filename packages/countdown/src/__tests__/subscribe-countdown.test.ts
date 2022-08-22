import { test } from 'vitest'
import { buildSteps } from './steps'

test('Subscribe countdown', () => {
  const steps = buildSteps()
  const subscriber1 = {
    update: () => {
      console.log('This is subscriber1')
    },
  }
  const subscriber2 = {
    update: () => {
      console.log('This is subscriber2')
    },
  }
  const subscriber3 = {
    update: () => {
      console.log('This is subscriber3')
    },
  }

  steps.givenCountdownWithSubscribers([subscriber1, subscriber2])

  steps.whenUserSubscribesWith(subscriber3)

  steps.thenCountdownSubscribersSizeIs(3)
})
