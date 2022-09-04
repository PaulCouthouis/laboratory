import { test } from 'vitest'
import { buildStep } from './steps/read-question'

test('Read Question', async () => {
  const steps = buildStep()

  steps.givenQuizWithQuestions([
    {
      title: 'Title 0',
      solution: 'Solution 0',
    },
    {
      title: 'Title 1',
      solution: 'Solution 1',
    },
    {
      title: 'Title 2',
      solution: 'Solution 2',
    },
  ])

  await steps.whenStudentReadQuestion(1)

  steps.thenReadedQuestionIs({
    title: 'Title 1',
    solution: 'Solution 1',
  })
})
