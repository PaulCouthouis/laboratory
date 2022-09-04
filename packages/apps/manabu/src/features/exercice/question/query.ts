import type { Quiz } from './repository'

export const createReadCurrentQuestion = (quizz: Quiz) => {
  return (index: number) => {
    return quizz.readQuestionBy(index)
  }
}
