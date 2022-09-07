import type { Question } from '../../values'

import { expect } from 'vitest'
import { createQuizInteractor } from '../../interactor'
import { createQuizPresenter } from './ports/presenter'
import { createQuizRepository } from './ports/repository'

export const createSteps = () => {
  const repository = createQuizRepository()
  const presenter = createQuizPresenter()
  const interactor = createQuizInteractor(repository, presenter)

  const givenQuizWithQuestions = (questions: Set<Question>) => {
    repository.initQuestions(questions)
  }

  const whenMoveOnNextQuestion = async () => {
    return interactor.moveOnNextQuestion()
  }

  const thenCurrentQuestionBecome = (expectedQuestion: Question) => {
    expect(presenter.get().question).toEqual(expectedQuestion)
  }

  const thenQuizzIsNotDone = () => {
    expect(presenter.get().isDone).toBe(false)
  }

  return {
    givenQuizWithQuestions,
    whenMoveOnNextQuestion,
    thenCurrentQuestionBecome,
    thenQuizzIsNotDone,
  }
}
