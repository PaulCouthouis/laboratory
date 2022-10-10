import type { Question } from '../../values'

import { expect } from 'vitest'
import { QuizConstructor } from '../../quiz'
import type { QuizState } from '../../ports'
import { QuizInteractor, QuizInteractorConstructor } from '../../interactors'

export const createSteps = () => {
  const presenter = createQuizPresenter()
  let interactor: QuizInteractor

  const givenQuizOnFirstQuestionOf = (questions: Question[]) => {
    const quiz = QuizConstructor.with(questions)
    interactor = QuizInteractorConstructor.with(quiz, presenter)
  }

  const whenMoveOnNextQuestion = () => {
    interactor.moveOnNextQuestion()
  }

  const thenCurrentQuestionBecome = (expectedQuestion: Question) => {
    expect(presenter.get().question).toEqual(expectedQuestion)
  }

  const thenQuizzIsNotDone = () => {
    expect(presenter.get().isDone).toBe(false)
  }

  return {
    givenQuizOnFirstQuestionOf,
    whenMoveOnNextQuestion,
    thenCurrentQuestionBecome,
    thenQuizzIsNotDone,
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
