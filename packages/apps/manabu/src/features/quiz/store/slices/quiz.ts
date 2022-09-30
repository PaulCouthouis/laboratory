import type { QuizState } from '../../domain/ports'
import type { Question } from '../../domain/values'

import { atom, computed, WritableAtom } from 'nanostores'
import { createQuizInteractor } from '../../domain/interactors'
import { createQuiz } from '../../domain/services'

export const createQuizSlice = (questions: Set<Question>) => {
  const quizAtom = atom<QuizState>(INITIAL_STATE)
  const state = {
    choices: computed(quizAtom, ({ question }) => question?.choices),
    solution: computed(quizAtom, ({ question }) => question?.solution),
    title: computed(quizAtom, ({ question }) => question?.title),
    isStarted: computed(quizAtom, ({ isStarted }) => isStarted),
  }

  const service = createQuiz()
  const presenter = createQuizPresenter(quizAtom)
  const interactor = createQuizInteractor(service, presenter)

  service.init(questions)

  return { state, actions: { ...interactor } }
}

const createQuizPresenter = (quizState: WritableAtom<QuizState>) => {
  const set = (state: QuizState) => {
    quizState.set(state)
  }

  return { set }
}

const INITIAL_STATE = {
  question: {
    choices: [],
    title: '',
    solution: '',
  },
  isDone: false,
  isStarted: false,
}
