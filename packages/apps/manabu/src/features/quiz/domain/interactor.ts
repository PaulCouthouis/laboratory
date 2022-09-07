import type { QuizPresenter, QuizRepository } from './ports'

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
