import type { Question } from './values'

export interface Quizz {
  readQuestionBy(index: number): Promise<Question>
}
