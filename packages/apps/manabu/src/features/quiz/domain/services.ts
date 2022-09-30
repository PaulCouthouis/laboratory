import type { Question, Result } from './values'

export const createExaminer = () => {
  let result: Result
  let solution: string | undefined

  const mark = async (answer: string) => {
    result = answer === solution ? 'right' : 'wrong'
    await Promise.resolve()
  }

  return {
    mark,
    get result() {
      return result
    },
    set solution(newSolution: string | undefined) {
      solution = newSolution
    },
  }
}

export const createQuiz = () => {
  let questions: Set<Question>
  let iteratorQuestions: Iterator<Question, Question>
  let currentQuestionState: IteratorResult<Question, Question> | undefined

  const getCurrentQuestion = () => {
    return currentQuestionState?.value
  }

  const getIsDone = () => {
    return currentQuestionState?.done || false
  }

  const getIsStarted = () => {
    return !!currentQuestionState
  }

  const initQuestions = (initialQuestions: Set<Question>) => {
    questions = initialQuestions
  }

  const iterateOnNextQuestion = () => {
    currentQuestionState = iteratorQuestions.next()
  }

  const moveOnFirstQuestion = () => {
    iteratorQuestions = questions.values()
    currentQuestionState = iteratorQuestions.next()
  }

  const reset = () => {
    currentQuestionState = undefined
  }

  return {
    initQuestions,
    iterateOnNextQuestion,
    getCurrentQuestion,
    getIsDone,
    getIsStarted,
    moveOnFirstQuestion,
    reset,
  }
}

export type Examiner = ReturnType<typeof createExaminer>
export type Quiz = ReturnType<typeof createQuiz>
