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

  const init = (initialQuestions: Set<Question>) => {
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
    get currentQuestion() {
      return currentQuestionState?.value
    },
    get isDone() {
      return currentQuestionState?.done || false
    },
    get isStarted() {
      return !!currentQuestionState
    },

    init,
    iterateOnNextQuestion,
    moveOnFirstQuestion,
    reset,
  }
}

export type Examiner = ReturnType<typeof createExaminer>
export type Quiz = ReturnType<typeof createQuiz>
