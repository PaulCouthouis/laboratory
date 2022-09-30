import type { Question } from '../../values'
import type { QuizState } from '../../ports'

import { expect } from 'vitest'
import { createQuizInteractor } from '../../interactors'
import { createQuiz } from '../../services'

export const createSteps = () => {
  const quiz = createQuiz()
  const presenter = createQuizPresenter()
  const interactor = createQuizInteractor(quiz, presenter)

  const givenQuizWithQuestions = (questions: Set<Question>) => {
    quiz.init(questions)
  }

  const whenStartQuiz = () => {
    return interactor.start()
  }

  const thenCurrentQuestionBecome = (expectedQuestion: Question) => {
    expect(presenter.get().question).toEqual(expectedQuestion)
  }

  const thenCurrentQuizIsStarted = () => {
    expect(presenter.get().isStarted).toBe(true)
  }

  return {
    givenQuizWithQuestions,
    whenStartQuiz,
    thenCurrentQuestionBecome,
    thenCurrentQuizIsStarted,
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
