import type { Result } from '../result'

export interface Grader {
  mark(answer: string): Promise<Result>
}
