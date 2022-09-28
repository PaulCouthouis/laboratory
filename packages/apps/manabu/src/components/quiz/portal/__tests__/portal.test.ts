import { describe, expect, it } from 'vitest'
import { atom } from 'nanostores'
import { createQuizPortal } from '../portal'

describe('Quiz Portal', () => {
  it('starts the quiz', () => {
    const { isStarted, start } = createQuizPortal(atom(false))

    start()

    expect(isStarted.get()).toBe(true)
  })

  it('stops the quiz', () => {
    const { isStarted, stop } = createQuizPortal(atom(true))

    stop()

    expect(isStarted.get()).toBe(false)
  })
})
