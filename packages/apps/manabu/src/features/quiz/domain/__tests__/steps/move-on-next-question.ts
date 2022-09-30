import type { Question } from '../../values'

import { expect } from 'vitest'
import { createQuizInteractor } from '../../interactors'
import type { QuizState } from '../../ports'

export const createSteps = () => {
  const repository = createQuizRepository()
  const presenter = createQuizPresenter()
  const interactor = createQuizInteractor(repository, presenter)

  const givenQuizWithQuestions = (questions: Set<Question>) => {
    repository.initQuestions(questions)
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
    givenQuizWithQuestions,
    whenMoveOnNextQuestion,
    thenCurrentQuestionBecome,
    thenQuizzIsNotDone,
  }
}

const createQuizRepository = () => {
  let iteratorQuestions: Iterator<Question, Question>
  let currentQuestionState: IteratorResult<Question, Question>

  const getCurrentQuestion = () => {
    return currentQuestionState.value
  }

  const getIsDone = () => {
    return currentQuestionState.done || false
  }

  const initQuestions = (questions: Set<Question>) => {
    iteratorQuestions = questions.values()
  }

  const iterateOnNextQuestion = async () => {
    currentQuestionState = iteratorQuestions.next()
    return Promise.resolve()
  }

  return { initQuestions, iterateOnNextQuestion, getCurrentQuestion, getIsDone }
}

const createQuizPresenter = () => {
  let state: QuizState
  const get = () => state
  const set = (newState: QuizState) => {
    state = newState
  }
  return { get, set }
}