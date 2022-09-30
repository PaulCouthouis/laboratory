import { test } from 'vitest'
import { createSteps } from './steps/stop'

test('Start quiz', () => {
  const steps = createSteps()

  steps.givenQuizStarted()

  steps.whenStopQuiz()

  steps.thenCurrentQuizIsNotStarted()
})
