import type { Question } from '..'

export function markResult(answer: string, question: Question): Result {
  return answer === question.solution ? 'right' : 'wrong'
}

export type Result = 'right' | 'wrong'
