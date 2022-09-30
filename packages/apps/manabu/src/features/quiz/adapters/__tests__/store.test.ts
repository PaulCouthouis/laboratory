import { describe, expect, it } from 'vitest'
import { createQuizStore } from '../store'

describe('Quizz feature with nanostores', () => {
  it('retrieves next question after right answer', async () => {
    const { state, actions } = setup()

    await actions.answer('solution 1')

    expect(state.title.get()).toBe('Title 2')
  })

  it('starts the quiz', () => {
    const { state, actions } = setup()

    actions.start()

    expect(state.isStarted.get()).toBe(true)
  })

  it('stops the quiz', () => {
    const { state, actions } = setup({
      initiallyStarted: true,
    })

    actions.stop()

    expect(state.isStarted.get()).toBe(false)
  })
})

const setup = (
  options = {
    initiallyStarted: false,
  }
) => {
  return createQuizStore(
    new Set([
      {
        title: 'Title 1',
        solution: 'solution 1',
      },
      {
        title: 'Title 2',
        solution: 'solution 2',
      },
    ]),
    options.initiallyStarted
  )
}
