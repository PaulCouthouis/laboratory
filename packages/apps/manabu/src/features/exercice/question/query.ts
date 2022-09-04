import type { Quiz } from './repository'

export const createReadCurrentQuestion = (quiz: Quiz) => {
  return (index: number) => {
    return quiz.getQuestionBy(index)
  }
}
