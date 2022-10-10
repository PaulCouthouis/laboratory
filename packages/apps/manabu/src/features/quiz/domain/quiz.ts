import type { Question } from './values'
import { List } from 'purify-ts'

const construct = (nextQuestions: Question[], oldQuestions: Question[]) => {
  const allQuestions = () => [...oldQuestions, ...nextQuestions]

  const head = List.head(nextQuestions)
  const tail = List.tail(nextQuestions)

  const clear = () => {
    return construct([], allQuestions())
  }

  const next = () => {
    if (tail.isJust() && head.isJust()) {
      return construct(tail.extract(), [...oldQuestions, head.extract()])
    }

    throw 'There are not next question'
  }

  const reset = () => {
    return construct(allQuestions(), [])
  }

  return {
    get current() {
      if (head.isJust()) {
        return head.extract()
      }

      throw 'There are not current question'
    },
    get done() {
      return tail.isNothing()
    },
    get started() {
      return head.isJust()
    },
    clear,
    next,
    reset,
  }
}

export const QuizConstructor = {
  with: (nextQuestions: Question[]) => construct(nextQuestions, []),
}
export type Quiz = ReturnType<typeof QuizConstructor['with']>
