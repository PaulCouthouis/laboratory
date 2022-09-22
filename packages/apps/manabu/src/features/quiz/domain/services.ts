import type { Result } from './values'

export const createExaminer = () => {
  let result: Result
  let solution: string

  const mark = async (answer: string) => {
    result = answer === solution ? 'right' : 'wrong'
    await Promise.resolve()
  }

  return {
    mark,
    get result() {
      return result
    },
    set solution(newSolution: string) {
      solution = newSolution
    },
  }
}

export type Examiner = ReturnType<typeof createExaminer>
