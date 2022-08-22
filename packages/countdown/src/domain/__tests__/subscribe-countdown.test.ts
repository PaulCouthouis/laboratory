import { test } from 'vitest'
import { buildSteps } from './steps/subscribe'

test('Subscribe countdown', () => {
  const steps = buildSteps()

  const subscriber1 = () => console.log('This is subscriber1')
  const subscriber2 = () => console.log('This is subscriber2')
  const subscriber3 = () => console.log('This is subscriber3')

  steps.givenCountdownWithSubscribers([subscriber1, subscriber2])
  steps.whenUserSubscribesWith(subscriber3)
  steps.thenCountdownSubscribersSizeIs(3)
})
