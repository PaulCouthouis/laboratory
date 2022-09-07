import type { QuizRepository, QuizPresenter, QuizState } from '../domain/ports'
import type { Question } from '../domain/values'

import { atom, WritableAtom } from 'nanostores'
import { createQuizInteractor } from '../domain/interactor'

export const createQuizStore = (questions: Set<Question>) => {
  const quizAtom = atom<QuizState>(INITIAL_STATE)

  const repository = createQuizRepository(questions)
  const presenter = createQuizPresenter(quizAtom)
  const interactor = createQuizInteractor(repository, presenter)

  return { state: quizAtom, actions: { ...interactor } }
}

const createQuizRepository = (questions: Set<Question>) => {
  const iteratorQuestions = questions.values()
  let currentQuestionState: IteratorResult<Question, Question>

  const getCurrentQuestion = () => {
    return currentQuestionState.value
  }

  const getIsDone = () => {
    return currentQuestionState.done || false
  }

  const iterateOnNextQuestion = async () => {
    currentQuestionState = iteratorQuestions.next()
    return Promise.resolve()
  }

  return { getCurrentQuestion, getIsDone, iterateOnNextQuestion }
}

const createQuizPresenter = (quizState: WritableAtom<QuizState>) => {
  const set = (state: QuizState) => {
    quizState.set(state)
  }

  return { set }
}

const INITIAL_STATE = {
  question: {
    title: '',
    solution: '',
  },
  isDone: false,
}
