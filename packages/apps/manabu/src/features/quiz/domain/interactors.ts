import type { QuizPresenter, QuizRepository, ResultPresenter } from './ports'
import type { Examiner } from './services'

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

export const createQuizInteractor = (
  repository: QuizRepository,
  presenter: QuizPresenter
) => {
  const moveOnNextQuestion = async () => {
    await repository.iterateOnNextQuestion()
    presenter.set({
      question: repository.getCurrentQuestion(),
      isDone: repository.getIsDone(),
    })
  }

  return { moveOnNextQuestion }
}
