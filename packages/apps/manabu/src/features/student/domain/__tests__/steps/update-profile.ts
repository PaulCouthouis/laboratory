import { expect } from 'vitest'
import { createFakeStudentRepository } from './ports/repository'
import type { Student } from '../../entities'
import { createStudentInteractor } from '../../interactor'
import { createUpdateStudentDTO } from '../../dto'

export const createSteps = () => {
  const repository = createFakeStudentRepository()
  const interactor = createStudentInteractor(repository)
  let receivedErrors = new Array<Error>()

  const givenProfileStudent = (initialStudent: Student) => {
    repository.current = initialStudent
  }

  const whenStudentUpdateProfile = async (partialStudent: Partial<Student>) => {
    try {
      const updateStudentDTO = createUpdateStudentDTO(partialStudent)
      await interactor.update(updateStudentDTO)
    } catch (errors) {
      receivedErrors = errors as Error[]
    }
  }

  const thenProfileDataAre = (expectedStudent: Student) => {
    expect(repository.current).toEqual(expectedStudent)
  }

  const thenCausedValidationErrorsAre = (expectedErrors: string[]) => {
    const receivedStringErrors = receivedErrors.map((e) => e.toString())
    expect(receivedStringErrors).toEqual(expectedErrors)
  }

  return {
    givenProfileStudent,
    whenStudentUpdateProfile,
    thenProfileDataAre,
    thenCausedValidationErrorsAre,
  }
}
