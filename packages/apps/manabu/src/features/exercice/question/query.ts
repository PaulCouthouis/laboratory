import type { Quizz } from './repository'

export const createReadQuestion = (quizz: Quizz) => {
  return (index: number) => {
    return quizz.readQuestionBy(index)
  }
}
