import { expect } from 'vitest'
import { QuizInteractor, QuizInteractorConstructor } from '../../interactors'
import type { QuizState } from '../../ports'
import { QuizConstructor } from '../../quiz'
import type { Question } from '../../values'

export const createSteps = () => {
  const presenter = createQuizPresenter()
  let interactor: QuizInteractor

  const givenQuizWithQuestions = (questions: Question[]) => {
    const quiz = QuizConstructor.with(questions)
    interactor = QuizInteractorConstructor.with(quiz, presenter)
  }

  const whenStartQuiz = () => {
    interactor.start()
  }

  const thenCurrentQuizIsStarted = () => {
    expect(presenter.get().isStarted).toEqual(true)
  }

  const thenCurrentQuestionBecome = (expectedQuestion: Question) => {
    expect(presenter.get().question).toEqual(expectedQuestion)
  }

  return {
    givenQuizWithQuestions,
    whenStartQuiz,
    thenCurrentQuizIsStarted,
    thenCurrentQuestionBecome,
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
