import { describe, expect, it, vitest } from 'vitest'
import { createRegisterDTO } from '../../domain/dto'
import { createRegistrationStore } from '../registration'

describe('Registration store', () => {
  it('submits a valid new student', async () => {
    const steps = createSteps()

    steps.givenValidRegisterForm(
      'harry.potter@hogwarts.com',
      'Harry',
      '[Hedwig2000]'
    )

    await steps.whenStudentSubmit()

    steps.thenRegisteredStudentIs(
      'harry.potter@hogwarts.com',
      'Harry',
      '[Hedwig2000]'
    )
  })

  it('alerts the password invalidity', () => {
    const steps = createSteps()

    steps.givenValidRegisterForm(
      'harry.potter@hogwarts.com',
      'Harry',
      '[Hedwig2000]'
    )

    steps.whenInputInvalidPassword('Hedwig2000')

    steps.thenPasswordValidityIs(false)
    steps.thenFormValidityIs(false)
  })

  it('alerts the nickname and email invalidity', () => {
    const steps = createSteps()

    steps.givenValidRegisterForm(
      'harry.potter@hogwarts.com',
      'Harry',
      '[Hedwig2000]'
    )

    steps.whenInputInvalidNickname('')
    steps.whenInputInvalidEmail('harry.potter@hogwarts')

    steps.thenNicknameValidityIs(false)
    steps.thenEmailValidityIs(false)
  })
})

const createSteps = () => {
  const register = vitest.fn()
  const {
    actions: { input, submit },
    state: { isValidForm, isValidPassword, isValidEmail, isValidNickname },
  } = createRegistrationStore(register)

  const givenValidRegisterForm = (
    email: string,
    nickname: string,
    password: string
  ) => {
    input('email', email)
    input('nickname', nickname)
    input('password', password)
  }

  const whenInputInvalidEmail = (email: string) => {
    input('email', email)
  }

  const whenInputInvalidNickname = (nickname: string) => {
    input('nickname', nickname)
  }

  const whenInputInvalidPassword = (password: string) => {
    input('password', password)
  }

  const whenStudentSubmit = async () => {
    await submit()
  }

  const thenEmailValidityIs = (expectedValidity: boolean) => {
    expect(isValidEmail.get()).toBe(expectedValidity)
  }

  const thenFormValidityIs = (expectedValidity: boolean) => {
    expect(isValidForm.get()).toBe(expectedValidity)
  }

  const thenNicknameValidityIs = (expectedValidity: boolean) => {
    expect(isValidNickname.get()).toBe(expectedValidity)
  }

  const thenPasswordValidityIs = (expectedValidity: boolean) => {
    expect(isValidPassword.get()).toBe(expectedValidity)
  }

  const thenRegisteredStudentIs = (
    expectedEmail: string,
    expectedNickname: string,
    expectedPassword: string
  ) => {
    const expectedRegisterDTO = createRegisterDTO(
      expectedEmail,
      expectedNickname,
      expectedPassword
    )

    expect(register).toBeCalledTimes(1)
    expect(register).toBeCalledWith(expectedRegisterDTO)
  }

  return {
    givenValidRegisterForm,
    whenInputInvalidEmail,
    whenInputInvalidNickname,
    whenInputInvalidPassword,
    whenStudentSubmit,
    thenRegisteredStudentIs,
    thenEmailValidityIs,
    thenFormValidityIs,
    thenNicknameValidityIs,
    thenPasswordValidityIs,
  }
}
