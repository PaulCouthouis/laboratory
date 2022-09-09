import { createStudent, Student } from '../../entities'

import { expect } from 'vitest'
import { createFakeStudentRepository } from './ports/repository'
import { createStudentInteractor } from '../../interactor'

export const createSteps = () => {
  const repository = createFakeStudentRepository()
  const interactor = createStudentInteractor(repository)

  const givenRegisteredStudents = (initialStudents: Student[]) => {
    repository.init(initialStudents)
  }

  const whenNewStudentRegister = async (
    email: string,
    nickname: string,
    password: string
  ) => {
    const student = createStudent(email, nickname, password)
    await interactor.register(student)
  }

  const thenNewStudentIsRegistered = (expectedStudents: Student[]) => {
    expect(repository.getAll()).toEqual(expectedStudents)
  }

  return {
    givenRegisteredStudents,
    whenNewStudentRegister,
    thenNewStudentIsRegistered,
  }
}
