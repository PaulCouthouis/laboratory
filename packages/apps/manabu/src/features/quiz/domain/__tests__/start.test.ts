import type { Question } from '../values'

import { test } from 'vitest'
import { createSteps } from './steps/start'

test('Start quiz', () => {
  const steps = createSteps()

  steps.givenQuizWithQuestions(
    new Set<Question>([
      {
        choices: ['Solution 1', 'Solution 2'],
        title: 'Title 1',
        solution: 'Solution 1',
      },
      {
        choices: ['Solution 1', 'Solution 2'],
        title: 'Title 2',
        solution: 'Solution 2',
      },
      {
        choices: ['Solution 1', 'Solution 2'],
        title: 'Title 3',
        solution: 'Solution 1',
      },
    ])
  )

  steps.whenStartQuiz()

  steps.thenCurrentQuizIsStarted()

  steps.thenCurrentQuestionBecome({
    choices: ['Solution 1', 'Solution 2'],
    title: 'Title 1',
    solution: 'Solution 1',
  })
})
