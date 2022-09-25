import type { Result } from '../../domain/values'

import { atom, ReadableAtom, WritableAtom } from 'nanostores'
import { createAnswerInteractor } from '../../domain/interactors'
import { createExaminer } from '../../domain/services'

export const createResultSlice = (currentSolution: ReadableAtom<string>) => {
  const resultAtom = atom<Result>('wrong')

  const examiner = createExaminer()
  const presenter = createExaminerPresenter(resultAtom)
  const interactor = createAnswerInteractor(examiner, presenter)

  currentSolution.listen((newSolution) => {
    examiner.solution = newSolution
  })

  return {
    state: resultAtom as ReadableAtom<Result>,
    actions: { ...interactor },
  }
}

const createExaminerPresenter = (resultAtom: WritableAtom<Result>) => {
  const set = (result: Result) => {
    resultAtom.set(result)
  }

  return { set }
}
