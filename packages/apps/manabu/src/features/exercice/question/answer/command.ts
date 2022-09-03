import type { Grader } from './repository'

export const buildAnswerQuestion = (grader: Grader) => {
  return async (answer: string) => {
    return grader.mark(answer)
  }
}
