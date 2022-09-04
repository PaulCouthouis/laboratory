import type { Question } from '../../../question/values'

export const createQuizz = () => {
  let questions: Question[]

  const initQuestions = (initialQuestions: Question[]) => {
    questions = initialQuestions
  }

  const readQuestionBy = async (index: number) => {
    return Promise.resolve(questions[index])
  }

  return { initQuestions, readQuestionBy }
}
