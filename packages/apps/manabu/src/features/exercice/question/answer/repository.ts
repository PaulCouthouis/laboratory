import type { Result } from './values'

export interface Grader {
  mark(answer: string): Promise<void>
  readResult(): Promise<Result>
}
