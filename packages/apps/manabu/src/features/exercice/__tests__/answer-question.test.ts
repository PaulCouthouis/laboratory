import { test } from 'vitest'
import { buildStep } from './steps/answer-question'

test('Answer question', async () => {
  const steps = buildStep()

  steps.givenQuestion({
    solution: 'D',
  })

  await steps.whenChoiceAnswerIs('D')

  steps.thenResultIs('right')
})
