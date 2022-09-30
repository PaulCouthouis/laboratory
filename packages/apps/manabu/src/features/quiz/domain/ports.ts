import type { Question, Result } from './values'

export interface QuizPresenter {
  set(state: QuizState): void
}

export type QuizState = {
  question?: Question
  isDone: boolean
  isStarted: boolean
}

export interface ResultPresenter {
  set(result: Result): void
}
