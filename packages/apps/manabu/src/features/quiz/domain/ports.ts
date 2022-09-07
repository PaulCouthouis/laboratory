import type { Question } from './values'

export interface QuizRepository {
  getCurrentQuestion(): Question
  getIsDone(): boolean
  iterateOnNextQuestion(): Promise<void>
}

export interface QuizPresenter {
  set(state: QuizState): void
}

export type QuizState = {
  question: Question
  isDone: boolean
}
