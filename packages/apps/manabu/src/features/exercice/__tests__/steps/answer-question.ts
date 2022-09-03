import { expect } from 'vitest'
import {
  AnswerQuestion,
  buildAnswerQuestion,
} from '../../question/answer/input'
import type { Grader } from '../../question/answer/output'
import { buildGrader } from './output/grader'

export const buildStep = () => {
  let grader: Grader
  let answerQuestion: AnswerQuestion
  let receivedResult: 'right' | 'wrong'

  const givenQuestion = (initialQuestion: { solution: string }) => {
    grader = buildGrader(initialQuestion)
    answerQuestion = buildAnswerQuestion(grader)
  }

  const whenChoiceAnswerIs = async (answer: string) => {
    receivedResult = await answerQuestion(answer)
  }

  const thenResultIs = (expectedResult: 'right' | 'wrong') => {
    expect(receivedResult).toBe(expectedResult)
  }

  return { givenQuestion, whenChoiceAnswerIs, thenResultIs }
}
