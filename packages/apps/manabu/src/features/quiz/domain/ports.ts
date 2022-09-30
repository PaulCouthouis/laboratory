import type { Question, Result } from './values'

export interface QuizRepository {
  getCurrentQuestion(): Question
  getIsDone(): boolean
  iterateOnNextQuestion(): void
}

export interface QuizPresenter {
  set(state: QuizState): void
}

export type QuizState = {
  question: Question
  isDone: boolean
}

export interface ResultPresenter {
  set(result: Result): void
}
