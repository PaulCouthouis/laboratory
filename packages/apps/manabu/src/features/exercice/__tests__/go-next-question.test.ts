import { test } from 'vitest'
import { buildSteps } from './steps/go-next-question'

test('Go to the next question', async () => {
  const steps = buildSteps()

  steps.givenCurrentQuestionIndexIs(1)

  await steps.whenStudentGoNextQuestion()

  steps.thenCurrentQuestionIndexIs(2)
})
