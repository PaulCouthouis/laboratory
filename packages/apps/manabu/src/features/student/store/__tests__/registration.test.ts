import { describe, expect, it, vitest } from 'vitest'
import { createRegisterDTO } from '../../domain/dto'
import { createRegistrationStore } from '../registration'

describe('Registration store', () => {
  it('submits a valid new student', async () => {
    const steps = createSteps()

    steps.givenRegisterForm(
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

    steps.givenRegisterForm(
      'harry.potter@hogwarts.com',
      'Harry',
      '[Hedwig2000]'
    )

    steps.whenInputPassword('Hedwig2000')

    steps.thenPasswordValidityIs(false)
    steps.thenFormValidityIs(false)
  })

  it('alerts the nickname and email invalidity', () => {
    const steps = createSteps()

    steps.givenRegisterForm(
      'harry.potter@hogwarts.com',
      'Harry',
      '[Hedwig2000]'
    )

    steps.whenInputNickname('')
    steps.whenInputEmail('harry.potter@hogwarts')

    steps.thenNicknameValidityIs(false)
    steps.thenEmailValidityIs(false)
  })

  describe('Password check rules', () => {
    it('checks that the password has more than 8 characters', () => {
      const steps = createSteps()

      steps.givenRegisterForm('harry.potter@hogwarts.com', 'Harry', '')

      steps.whenInputPassword('12345678')

      steps.thenPasswordGoodLengthIs(true)
    })

    it('checks that the password has lower case', () => {
      const steps = createSteps()

      steps.givenRegisterForm('harry.potter@hogwarts.com', 'Harry', '')

      steps.whenInputPassword('q')

      steps.thenPasswordLowerCaseIs(true)
    })

    it('checks that the password has upper case', () => {
      const steps = createSteps()

      steps.givenRegisterForm('harry.potter@hogwarts.com', 'Harry', '')

      steps.whenInputPassword('M')

      steps.thenPasswordUpperCaseIs(true)
    })

    it('checks that the password has figure', () => {
      const steps = createSteps()

      steps.givenRegisterForm('harry.potter@hogwarts.com', 'Harry', '')

      steps.whenInputPassword('9')

      steps.thenPasswordFigureIs(true)
    })

    it('checks that the password has special char', () => {
      const steps = createSteps()

      steps.givenRegisterForm('harry.potter@hogwarts.com', 'Harry', '')

      steps.whenInputPassword('[')

      steps.thenPasswordSpecialCharIs(true)
    })
  })
})

const createSteps = () => {
  const register = vitest.fn()
  const {
    actions: { input, submit },
    state: {
      hasFigure,
      hasGoodLength,
      hasLowerCase,
      hasSpecialChar,
      hasUpperCase,
      isValidForm,
      isValidPassword,
      isValidEmail,
      isValidNickname,
    },
  } = createRegistrationStore(register)

  const givenRegisterForm = (
    email: string,
    nickname: string,
    password: string
  ) => {
    input('email', email)
    input('nickname', nickname)
    input('password', password)
  }

  const whenInputEmail = (email: string) => {
    input('email', email)
  }

  const whenInputNickname = (nickname: string) => {
    input('nickname', nickname)
  }

  const whenInputPassword = (password: string) => {
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

  const thenPasswordGoodLengthIs = (expectedValidity: boolean) => {
    expect(hasGoodLength.get()).toBe(expectedValidity)
  }

  const thenPasswordLowerCaseIs = (expectedValidity: boolean) => {
    expect(hasLowerCase.get()).toBe(expectedValidity)
  }

  const thenPasswordUpperCaseIs = (expectedValidity: boolean) => {
    expect(hasUpperCase.get()).toBe(expectedValidity)
  }

  const thenPasswordFigureIs = (expectedValidity: boolean) => {
    expect(hasFigure.get()).toBe(expectedValidity)
  }

  const thenPasswordSpecialCharIs = (expectedValidity: boolean) => {
    expect(hasSpecialChar.get()).toBe(expectedValidity)
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
    givenRegisterForm,
    whenInputEmail,
    whenInputNickname,
    whenInputPassword,
    whenStudentSubmit,
    thenRegisteredStudentIs,
    thenEmailValidityIs,
    thenFormValidityIs,
    thenNicknameValidityIs,
    thenPasswordValidityIs,
    thenPasswordGoodLengthIs,
    thenPasswordFigureIs,
    thenPasswordLowerCaseIs,
    thenPasswordUpperCaseIs,
    thenPasswordSpecialCharIs,
  }
}
