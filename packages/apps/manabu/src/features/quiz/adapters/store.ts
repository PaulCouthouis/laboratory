import type { Question, Result } from '../domain/values'
import { createQuizSlice } from './slices/quiz'
import { createResultSlice } from './slices/result'
import { createPowerSlice } from './slices/power'

export const createQuizStore = (
  questions: Set<Question>,
  initiallyStarted = false
) => {
  const {
    actions: { start, stop },
    state: isStarted,
  } = createPowerSlice(initiallyStarted)

  const {
    actions: { moveOnNextQuestion },
    state: { solution, title },
  } = createQuizSlice(questions)

  const {
    actions: { answer },
    state: result,
  } = createResultSlice(solution)

  const initQuiz = moveOnNextQuestion

  const resultListener = (result: Result) => {
    if (result === 'right') {
      moveOnNextQuestion()
    }
  }

  result.subscribe(resultListener)

  initQuiz()

  return {
    state: {
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
