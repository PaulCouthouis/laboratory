import type { Question } from '../values'

import { test } from 'vitest'
import { createSteps } from './steps/move-on-next-question'

test('Move on next question', async () => {
  const steps = createSteps()

  steps.givenQuizWithQuestions(
    new Set<Question>([
      {
        title: 'Title 1',
        solution: 'Solution 1',
      },
      {
        title: 'Title 2',
        solution: 'Solution 1',
      },
      {
        title: 'Title 3',
        solution: 'Solution 1',
      },
    ])
  )

  await steps.whenMoveOnNextQuestion()

  steps.thenCurrentQuestionBecome({
    title: 'Title 1',
    solution: 'Solution 1',
  })

  steps.thenQuizzIsNotDone()
})
