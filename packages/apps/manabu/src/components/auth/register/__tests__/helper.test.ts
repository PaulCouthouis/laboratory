import type { Student } from '../../../../features/student/domain/entities'

import { describe, expect, it, vitest } from 'vitest'
import { createRegisterHelper } from '../helper'

describe('Register Helper', () => {
  it('submits a valid new student', async () => {
    const steps = createSteps()

    steps.givenValidRegisterForm({
      email: 'harry.potter@hogwarts.com',
      nickname: 'Harry',
      password: '[Hedwig2000]',
    })

    await steps.whenStudentSubmit()

    steps.thenRegisteredStudentIs({
      email: 'harry.potter@hogwarts.com',
      nickname: 'Harry',
      password: '[Hedwig2000]',
    })
  })

  it('alerts the form invalidity', () => {
    const steps = createSteps()

    steps.givenValidRegisterForm({
      email: 'harry.potter@hogwarts.com',
      nickname: 'Harry',
      password: '[Hedwig2000]',
    })

    steps.whenInputInvalidPassword('Hedwig2000')

    steps.thenFormValidityIs(false)
  })
})

const createSteps = () => {
  const register = vitest.fn()
  const helper = createRegisterHelper(register)

  const givenValidRegisterForm = (registerForm: Student) => {
    const { email, nickname, password } = registerForm

    helper.input('email', email)
    helper.input('nickname', nickname)
    helper.input('password', password)
  }

  const whenStudentSubmit = async () => {
    await helper.submit()
  }

  const whenInputInvalidPassword = (password: string) => {
    helper.input('password', password)
  }

  const thenRegisteredStudentIs = (expectedStudent: Student) => {
    expect(register).toBeCalledTimes(1)
    expect(register).toBeCalledWith(expectedStudent)
  }

  const thenFormValidityIs = (expectedValidity: boolean) => {
    expect(helper.validity.get()).toBe(expectedValidity)
  }

  return {
    givenValidRegisterForm,
    whenStudentSubmit,
    whenInputInvalidPassword,
    thenRegisteredStudentIs,
    thenFormValidityIs,
  }
}
