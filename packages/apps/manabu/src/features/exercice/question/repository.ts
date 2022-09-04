import type { Question } from './values'

export interface Quiz {
  getQuestionBy(index: number): Promise<Question>
  next(): Promise<void>
}
