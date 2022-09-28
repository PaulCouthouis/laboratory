import type { Question } from '../domain/values'
import { createQuizSlice } from './slices/quiz'
import { createResultSlice } from './slices/result'

export const createQuizStore = (questions: Set<Question>) => {
  const quizSlice = createQuizSlice(questions)
  const resultSlice = createResultSlice(quizSlice.state.solution)

  return {
    state: {
      title: quizSlice.state.title,
      result: resultSlice.state,
    },
    actions: {
      ...quizSlice.actions,
      ...resultSlice.actions,
    },
  }
}
