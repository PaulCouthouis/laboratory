import { createStudent, Student } from '../../entities'

import { expect } from 'vitest'
import { createFakeStudentRepository } from './ports/repository'
import { createStudentInteractor } from '../../interactor'

export const createSteps = () => {
  const repository = createFakeStudentRepository()
  const interactor = createStudentInteractor(repository)
  let receivedErrors = new Array<Error>()

  const givenRegisteredStudents = (initialStudents: Student[]) => {
    repository.students = initialStudents
  }

  const whenNewStudentRegister = async (
    email: string,
    nickname: string,
    password: string
  ) => {
    try {
      const student = createStudent(email, nickname, password)
      await interactor.register(student)
    } catch (errors) {
      receivedErrors = errors as Error[]
    }
  }

  const thenNewStudentIsRegistered = (expectedStudents: Student[]) => {
    expect(repository.students).toEqual(expectedStudents)
  }

  const thenCausedValidationErrorsAre = (expectedErrors: string[]) => {
    const receivedStringErrors = receivedErrors.map((e) => e.toString())
    expect(receivedStringErrors).toEqual(expectedErrors)
  }

  return {
    givenRegisteredStudents,
    whenNewStudentRegister,
    thenNewStudentIsRegistered,
    thenCausedValidationErrorsAre,
  }
}
