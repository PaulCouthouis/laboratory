import { test } from 'vitest'
import { createSteps } from './steps/move-on-next-question'

test('Move on next question', () => {
  const steps = createSteps()

  steps.givenQuizOnFirstQuestionOf([
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

  steps.whenMoveOnNextQuestion()

  steps.thenCurrentQuestionBecome({
    choices: ['Solution 1', 'Solution 2'],
    title: 'Title 2',
    solution: 'Solution 2',
  })

  steps.thenQuizzIsNotDone()
})
