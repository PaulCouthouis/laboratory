import type { Question } from '../../../question'
import { markResult } from '../../../question/answer/result'

export const buildGrader = (question: Question) => {
  const mark = async (answer: string) => {
    const result = markResult(answer, question)
    return Promise.resolve<'right' | 'wrong'>(result)
  }

  return { mark }
}
