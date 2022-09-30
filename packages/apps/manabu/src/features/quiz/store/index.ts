import type { Question, Result } from '../domain/values'
import { createQuizSlice } from './slices/quiz'
import { createResultSlice } from './slices/result'

export const createQuizStore = (questions: Set<Question>) => {
  const {
    actions: { moveOnNextQuestion, start, stop },
    state: { choices, isStarted, solution, title },
  } = createQuizSlice(questions)

  const {
    actions: { answer },
    state: result,
  } = createResultSlice(solution)

  const resultListener = (result: Result) => {
    if (result === 'right') {
      moveOnNextQuestion()
    }
  }

  result.subscribe(resultListener)

  return {
    state: {
      choices,
      title,
      isStarted,
    },
    actions: {
      answer,
      start,
      stop,
    },
  }
}

export type QuizStore = ReturnType<typeof createQuizStore>
