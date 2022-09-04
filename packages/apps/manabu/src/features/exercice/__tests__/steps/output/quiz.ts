import type { Question } from '../../../question/values'

export const createQuiz = () => {
  let currentIndex: number
  let questions: Question[]

  const getCurrentIndex = () => currentIndex

  const initQuestions = (initialQuestions: Question[]) => {
    questions = initialQuestions
  }

  const initCurrentIndex = (initialIndex: number) => {
    currentIndex = initialIndex
  }

  const readQuestionBy = async (index: number) => {
    return Promise.resolve(questions[index])
  }

  const next = async () => {
    currentIndex = currentIndex + 1
    return Promise.resolve()
  }

  return {
    getCurrentIndex,
    initCurrentIndex,
    initQuestions,
    readQuestionBy,
    next,
  }
}
