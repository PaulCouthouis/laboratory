import type { Grader } from './repository'

export const buildReadResult = (grader: Grader) => {
  return async () => {
    return grader.readResult()
  }
}
