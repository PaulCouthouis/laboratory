import type { Student } from '../../entities'

import { expect } from 'vitest'
import { createFakeStudentRepository } from './ports/repository'
import { createRegisterDTO } from '../../dto'
import { createStudentInteractor } from '../../interactor'

export const createSteps = () => {
  const repository = createFakeStudentRepository()
  const presenter = createRegistrationResolvedPresenter()
  const interactor = createStudentInteractor(repository, presenter)

  const givenRegisteredStudents = (initialStudents: Student[]) => {
    repository.students = initialStudents
  }

  const whenNewStudentRegister = async (
    email: string,
    nickname: string,
    password: string
  ) => {
    const registerDTO = createRegisterDTO(email, nickname, password)
    await interactor.register(registerDTO)
  }

  const thenNewStudentIsRegistered = (expectedStudents: Student[]) => {
    expect(repository.students).toEqual(expectedStudents)
    expect(presenter.get()).toBe(true)
  }

  return {
    givenRegisteredStudents,
    whenNewStudentRegister,
    thenNewStudentIsRegistered,
  }
}

const createRegistrationResolvedPresenter = () => {
  let ok = false

  const get = () => ok
  const set = (isResolved: boolean) => {
    ok = isResolved
  }

  return { get, set }
}