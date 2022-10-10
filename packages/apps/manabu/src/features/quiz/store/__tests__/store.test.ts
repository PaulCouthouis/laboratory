import { describe, expect, it } from 'vitest'
import { createQuizStore } from '..'

describe('Quizz feature with nanostores', () => {
  it('retrieves next question after right answer', async () => {
    const { state, actions } = setup()

    actions.start()
    await actions.answer('solution 1')

    expect(state.title.get()).toBe('Title 2')
    expect(state.choices.get()).toEqual(['A', 'B', 'C'])
  })

  it('starts the quiz', () => {
    const { state, actions } = setup()

    actions.stop()
    actions.start()

    expect(state.isStarted.get()).toBe(true)
  })

  it('stops the quiz', () => {
    const { state, actions } = setup()

    actions.start()
    actions.stop()

    expect(state.isStarted.get()).toBe(false)
  })
})

const setup = () => {
  return createQuizStore([
    {
      choices: ['1', '2', '3'],
      title: 'Title 1',
      solution: 'solution 1',
    },
    {
      choices: ['A', 'B', 'C'],
      title: 'Title 2',
      solution: 'solution 2',
    },
  ])
}
