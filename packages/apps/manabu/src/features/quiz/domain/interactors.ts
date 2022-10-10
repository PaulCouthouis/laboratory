import type { QuizPresenter, ResultPresenter } from './ports'
import type { Quiz } from './quiz'
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

const construct = (quiz: Quiz, presenter: QuizPresenter) => {
  const refreshPresenter = () => {
    presenter.set({
      question: quiz.started ? quiz.current : undefined,
      isDone: quiz.done,
      isStarted: quiz.started,
    })
  }

  const moveOnNextQuestion = () => {
    quiz = quiz.next()
    refreshPresenter()
  }

  const start = () => {
    quiz = quiz.reset()
    refreshPresenter()
  }

  const stop = () => {
    quiz = quiz.clear()
    refreshPresenter()
  }

  return { moveOnNextQuestion, start, stop }
}

export const QuizInteractorConstructor = {
  with: construct,
}
export type QuizInteractor = ReturnType<
  typeof QuizInteractorConstructor['with']
>