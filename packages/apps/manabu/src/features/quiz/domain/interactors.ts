import type { QuizPresenter, ResultPresenter } from './ports'
import type { Examiner, Quiz } from './services'

export const createAnswerInteractor = (
  examiner: Examiner,
  presenter: ResultPresenter
) => {
  const answer = async (proposedAnswer: string) => {
    await examiner.mark(proposedAnswer)
    presenter.set(examiner.result)
  }

  return { answer }
}

export const createQuizInteractor = (service: Quiz, presenter: QuizPresenter) => {
  const refreshPresenter = () => {
    presenter.set({
      question: service.getCurrentQuestion(),
      isDone: service.getIsDone(),
      isStarted: service.getIsStarted(),
    })
  }

  const moveOnNextQuestion = () => {
    service.iterateOnNextQuestion()
    refreshPresenter()
  }

  const start = () => {
    service.moveOnFirstQuestion()
    refreshPresenter()
  }

  const stop = () => {
    service.reset()
    refreshPresenter()
  }

  return { moveOnNextQuestion, start, stop }
}
