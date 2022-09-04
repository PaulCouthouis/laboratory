import type { Quiz } from './repository'

export const createGoNextQuestion = (quiz: Quiz) => {
  return () => {
    return quiz.next()
  }
}
