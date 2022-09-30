import type { Question } from '../../values'
import type { QuizState } from '../../ports'

import { expect } from 'vitest'
import { createQuizInteractor } from '../../interactors'
import { createQuiz } from '../../services'

export const createSteps = () => {
  const quiz = createQuiz()
  const presenter = createQuizPresenter()
  const interactor = createQuizInteractor(quiz, presenter)

  const givenQuizOnFirstQuestionOf = (questions: Set<Question>) => {
    quiz.init(questions)
    quiz.moveOnFirstQuestion()
  }

  const whenMoveOnNextQuestion = () => {
    return interactor.moveOnNextQuestion()
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