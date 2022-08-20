import { test } from 'vitest'
import { buildShowCountdownTestSteps } from './steps'

test('Show the countdown', () => {
  const steps = buildShowCountdownTestSteps()

  steps.givenCountdownWithRemainingTimes({
    days: 10,
    hours: 7,
    minutes: 44,
    seconds: 12,
  })

  steps.whenUserShowsCountdown()

  steps.thenRemainingTimesIs({
    days: 10,
    hours: 7,
    minutes: 44,
    seconds: 12,
  })
})
