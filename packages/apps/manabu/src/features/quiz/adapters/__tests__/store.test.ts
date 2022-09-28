import { describe, expect, it } from 'vitest'
import { createQuizStore } from '../store'

describe('Quizz feature with nanostores', () => {
  it('retrieves current question title', async () => {
    const { state, actions } = setup()

    await actions.moveOnNextQuestion()

    expect(state.title.get()).toBe('Title')
  })

  it('retrieves current result', async () => {
    const { state, actions } = setup()

    await actions.moveOnNextQuestion()
    await actions.answer('solution')

    expect(state.result.get()).toBe('right')
  })
})

const setup = () => {
  return createQuizStore(
    new Set([
      {
        title: 'Title',
        solution: 'solution',
      },
    ])
  )
}
