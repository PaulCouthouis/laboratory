import type { Question } from './values'

export interface Quiz {
  readQuestionBy(index: number): Promise<Question>
  next(): Promise<void>
}
