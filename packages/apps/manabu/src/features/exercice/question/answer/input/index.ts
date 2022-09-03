import type { Grader } from '../output'

export const buildAnswerQuestion = (grader: Grader) => {
  return async (answer: string) => {
    return grader.mark(answer)
  }
}

export type AnswerQuestion = ReturnType<typeof buildAnswerQuestion>
