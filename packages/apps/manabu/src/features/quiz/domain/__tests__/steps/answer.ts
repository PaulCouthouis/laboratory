import { expect } from 'vitest'
import { createAnswerInteractor } from '../../interactors'
import { createExaminer } from '../../services'

import type { Result } from '../../values'

export const createSteps = () => {
  const examiner = createExaminer()
  const presenter = createResultPresenter()
  const interactor = createAnswerInteractor(examiner, presenter)

  const givenSolution = (initialSolution: string) => {
    examiner.solution = initialSolution
  }

  const whenAnswerWith = async (proposedAnswer: string) => {
    await interactor.answer(proposedAnswer)
  }

  const thenResultIs = (expectedResult: Result) => {
    expect(presenter.get()).toBe(expectedResult)
  }

  return { givenSolution, whenAnswerWith, thenResultIs }
}

const createResultPresenter = () => {
  let result: Result

  const get = () => {
    return result
  }

  const set = (newResult: Result) => {
    result = newResult
  }

  return { get, set }
}
