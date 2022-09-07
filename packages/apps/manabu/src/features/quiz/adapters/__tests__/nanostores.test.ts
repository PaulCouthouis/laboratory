import { expect, test } from 'vitest'
import { createQuizStore } from '../nanostores'

test('Quizz feature with nanostores', async () => {
  const { state, actions } = createQuizStore(
    new Set([
      {
        title: 'Title',
        solution: 'solution',
      },
    ])
  )

  await actions.moveOnNextQuestion()

  expect(state.get()).toEqual({
    question: {
      title: 'Title',
      solution: 'solution',
    },
    isDone: false,
  })
})
