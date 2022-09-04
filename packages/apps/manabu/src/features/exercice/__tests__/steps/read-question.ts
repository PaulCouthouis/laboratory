import { expect } from 'vitest'
import { createReadQuestion } from '../../question/query'
import type { Question } from '../../question/values'
import { createQuizz } from './output/quizz'

export const buildStep = () => {
  const quizz = createQuizz()
  const readQuestion = createReadQuestion(quizz)
  let receivedQuestion: Question

  const givenQuizWithQuestions = (initialQuestions: Question[]) => {
    quizz.initQuestions(initialQuestions)
  }

  const whenStudentReadQuestion = async (questionIndex: number) => {
    receivedQuestion = await readQuestion(questionIndex)
  }

  const thenReadedQuestionIs = (expectedQuestion: Question) => {
    expect(receivedQuestion).toEqual(expectedQuestion)
  }

  return {
    givenQuizWithQuestions,
    whenStudentReadQuestion,
    thenReadedQuestionIs,
  }
}
