import { expect } from 'vitest'
import { QuizInteractor, QuizInteractorConstructor } from '../../interactors'
import type { QuizState } from '../../ports'
import { QuizConstructor } from '../../quiz'

export const createSteps = () => {
  const presenter = createQuizPresenter()
  let interactor: QuizInteractor

  const givenQuizStarted = () => {
    const quiz = QuizConstructor.with([
      {
        choices: [],
        title: 'Title A',
        solution: 'Solution A',
      },
    ])
    interactor = QuizInteractorConstructor.with(quiz, presenter)
  }

  const whenStopQuiz = () => {
    interactor.stop()
  }

  const thenCurrentQuizIsNotStarted = () => {
    expect(presenter.get().isStarted).toBe(false)
  }

  return { givenQuizStarted, whenStopQuiz, thenCurrentQuizIsNotStarted }
}

const createQuizPresenter = () => {
  let state: QuizState
  const get = () => state
  const set = (newState: QuizState) => {
    state = newState
  }
  return { get, set }
}
