import { expect } from 'vitest'
import { createFakeStudentRepository } from './ports/repository'
import type { Student } from '../../entities'
import { createStudentInteractor } from '../../interactor'

export const createSteps = () => {
  const repository = createFakeStudentRepository()
  const interactor = createStudentInteractor(repository)

  const givenProfileStudent = (initialStudent: Student) => {
    repository.current = initialStudent
  }

  const whenStudentUpdateProfile = async (
    updateStudentDTO: Partial<Student>
  ) => {
    await interactor.updateProfile(updateStudentDTO)
  }

  const thenProfileDataAre = (expectedStudent: Student) => {
    expect(repository.current).toEqual(expectedStudent)
  }

  return { givenProfileStudent, whenStudentUpdateProfile, thenProfileDataAre }
}
