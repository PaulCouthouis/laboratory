import { test } from 'vitest'
import { buildCountdownTestSteps } from './steps'

test('Show the countdown', () => {
  const steps = buildCountdownTestSteps()

  steps.givenCountdownWithRemainingTimes({
    days: 10,
    hours: 7,
    minutes: 44,
    seconds: 12,
  })

  steps.whenUserShowsCountdown()

  steps.thenDisplayedRemainingTimesIs({
    days: 10,
    hours: 7,
    minutes: 44,
    seconds: 12,
  })
})
