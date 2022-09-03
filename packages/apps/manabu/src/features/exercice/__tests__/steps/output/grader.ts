import type { Question } from '../../../question'
import { markResult, Result } from '../../../question/answer/values'

export const buildGrader = () => {
  let marked: Result
  let question: Question

  const mark = async (answer: string) => {
    marked = markResult(answer, question)
    return Promise.resolve()
  }

  const readResult = async () => {
    return Promise.resolve(marked)
  }

  const initQuestion = (newQuestion: Question) => {
    question = newQuestion
  }
  const initMarked = (newMarked: Result) => {
    marked = newMarked
  }

  const getMarked = () => marked

  return { mark, readResult, initQuestion, initMarked, getMarked }
}

export type FakeGrader = ReturnType<typeof buildGrader>