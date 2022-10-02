import type { Student } from '../../entities'

import { expect } from 'vitest'
import { createFakeStudentRepository } from './ports/repository'
import { createStudentInteractor } from '../../interactor'
import { createUpdateStudentDTO } from '../../dto'

export const createSteps = () => {
  const repository = createFakeStudentRepository()
  const interactor = createStudentInteractor(repository)

  const givenProfileStudent = (initialStudent: Student) => {
    repository.current = initialStudent
  }

  const whenStudentUpdateProfile = async (partialStudent: Partial<Student>) => {
    const updateStudentDTO = createUpdateStudentDTO(partialStudent)
    await interactor.update(updateStudentDTO)
  }

  const thenProfileDataAre = (expectedStudent: Student) => {
    expect(repository.current).toEqual(expectedStudent)
  }

  return {
    givenProfileStudent,
    whenStudentUpdateProfile,
    thenProfileDataAre,
  }
}
