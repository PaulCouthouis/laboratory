import type { QuizState } from '../../ports'

import { expect } from 'vitest'
import { createQuizInteractor } from '../../interactors'
import { createQuiz } from '../../services'

export const createSteps = () => {
  const quiz = createQuiz()
  const presenter = createQuizPresenter()
  const interactor = createQuizInteractor(quiz, presenter)

  const givenQuizStarted = () => {
    quiz.init(new Set([]))
    quiz.moveOnFirstQuestion()
  }

  const whenStopQuiz = () => {
    interactor.stop()
  }

  const thenCurrentQuizIsNotStarted = () => {
    expect(presenter.get().isStarted).toBe(false)
  }

  return {
    givenQuizStarted,
    whenStopQuiz,
    thenCurrentQuizIsNotStarted,
  }
}

const createQuizPresenter = () => {
  let state: QuizState
  const get = () => state
  const set = (newState: QuizState) => {
    state = newState
  }
  return { get, set }
}
