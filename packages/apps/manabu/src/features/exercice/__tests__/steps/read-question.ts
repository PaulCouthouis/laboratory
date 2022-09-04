import { expect } from 'vitest'
import { createReadCurrentQuestion } from '../../question/query'
import type { Question } from '../../question/values'
import { createQuiz } from './output/quiz'

export const buildStep = () => {
  const quiz = createQuiz()
  const readQuestion = createReadCurrentQuestion(quiz)
  let receivedQuestion: Question

  const givenQuizWithQuestions = (initialQuestions: Question[]) => {
    quiz.initQuestions(initialQuestions)
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
