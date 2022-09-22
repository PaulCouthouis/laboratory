import { test } from 'vitest'
import { createSteps } from './steps/answer'

test('Answer a question', async () => {
  const steps = createSteps()

  steps.givenSolution('A')

  await steps.whenAnswerWith('A')

  steps.thenResultIs('right')
})
