import { expect } from 'vitest'
import { createGoNextQuestion } from '../../question/command'
import { createQuiz } from './output/quiz'

export const buildSteps = () => {
  const quiz = createQuiz()
  const goNextQuestion = createGoNextQuestion(quiz)

  const givenCurrentQuestionIndexIs = (initialIndex: number) => {
    quiz.initCurrentIndex(initialIndex)
  }

  const whenStudentGoNextQuestion = async () => {
    await goNextQuestion()
  }

  const thenCurrentQuestionIndexIs = (expectedIndex: number) => {
    expect(quiz.getCurrentIndex()).toBe(expectedIndex)
  }

  return {
    givenCurrentQuestionIndexIs,
    whenStudentGoNextQuestion,
    thenCurrentQuestionIndexIs,
  }
}
