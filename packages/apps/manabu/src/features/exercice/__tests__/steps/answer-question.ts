import { expect } from 'vitest'
import { buildAnswerQuestion } from '../../question/answer/command'
import { buildGrader } from './output/grader'

export const buildStep = () => {
  const grader = buildGrader()
  const answerQuestion = buildAnswerQuestion(grader)

  const givenQuestion = (question: { solution: string }) => {
    grader.initQuestion(question)
  }

  const whenChoiceAnswerIs = async (answer: string) => {
    await answerQuestion(answer)
  }

  const thenResultIs = (expectedResult: 'right' | 'wrong') => {
    expect(grader.getMarked()).toBe(expectedResult)
  }

  return { givenQuestion, whenChoiceAnswerIs, thenResultIs }
}
