import { expect } from 'vitest'
import { buildReadResult } from '../../question/answer/query'
import type { Result } from '../../question/answer/values'
import { buildGrader } from './output/grader'

export const buildStep = () => {
  const grader = buildGrader()
  const readResult = buildReadResult(grader)

  let receivedResult: Result

  const givenMarkedResultIs = (marked: Result) => {
    grader.initMarked(marked)
  }

  const whenReadResult = async () => {
    receivedResult = await readResult()
  }

  const thenResultIs = (expectedResult: Result) => {
    expect(receivedResult).toBe(expectedResult)
  }

  return { givenMarkedResultIs, whenReadResult, thenResultIs }
}
