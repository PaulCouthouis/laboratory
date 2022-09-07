import type { Question } from '../../../values'

export const createQuizRepository = () => {
  let iteratorQuestions: Iterator<Question, Question>
  let currentQuestionState: IteratorResult<Question, Question>

  const getCurrentQuestion = () => {
    return currentQuestionState.value
  }

  const getIsDone = () => {
    return currentQuestionState.done || false
  }

  const initQuestions = (questions: Set<Question>) => {
    iteratorQuestions = questions.values()
  }

  const iterateOnNextQuestion = async () => {
    currentQuestionState = iteratorQuestions.next()
    return Promise.resolve()
  }

  return { initQuestions, iterateOnNextQuestion, getCurrentQuestion, getIsDone }
}
