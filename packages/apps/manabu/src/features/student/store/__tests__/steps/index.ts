import type { ReadableAtom } from 'nanostores'
import { expect } from 'vitest'
import { createRegistrationStore } from '../../registration'

export const createSteps = (option = { withRegistrationFail: false }) => {
  const register = () => Promise.resolve({ ok: !option.withRegistrationFail })

  const {
    actions: { input, submit },
    state: {
      hasFigure,
      hasGoodLength,
      hasLowerCase,
      hasSpecialChar,
      hasUpperCase,
      isRejected,
      isResolved,
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

  const thenEmailValidityIs = expectAtomWithExpressiveExpectedArg(isValidEmail)

  const thenFormValidityIs = expectAtomWithExpressiveExpectedArg(isValidForm)

  const thenNicknameValidityIs =
    expectAtomWithExpressiveExpectedArg(isValidNickname)

  const thenPasswordValidityIs =
    expectAtomWithExpressiveExpectedArg(isValidPassword)

  const thenPasswordGoodLengthIs =
    expectAtomWithExpressiveExpectedArg(hasGoodLength)

  const thenPasswordLowerCaseIs =
    expectAtomWithExpressiveExpectedArg(hasLowerCase)

  const thenPasswordUpperCaseIs =
    expectAtomWithExpressiveExpectedArg(hasUpperCase)

  const thenPasswordFigureIs = expectAtomWithExpressiveExpectedArg(hasFigure)

  const thenPasswordSpecialCharIs =
    expectAtomWithExpressiveExpectedArg(hasSpecialChar)

  const thenStudentIsRegistered = expectAtomWithoutExpressiveExpectedArg(
    isResolved,
    true
  )

  const thenStudentIsNotRegistered = expectAtomWithoutExpressiveExpectedArg(
    isRejected,
    true
  )

  return {
    givenRegisterForm,
    whenInputEmail,
    whenInputNickname,
    whenInputPassword,
    whenStudentSubmit,
    thenEmailValidityIs,
    thenFormValidityIs,
    thenNicknameValidityIs,
    thenPasswordValidityIs,
    thenPasswordGoodLengthIs,
    thenPasswordFigureIs,
    thenPasswordLowerCaseIs,
    thenPasswordUpperCaseIs,
    thenPasswordSpecialCharIs,
    thenStudentIsRegistered,
    thenStudentIsNotRegistered,
  }
}

const expectAtomWithExpressiveExpectedArg = (
  isValidEmail: ReadableAtom<boolean>
) => {
  return (expectedValidity: boolean) => {
    expect(isValidEmail.get()).toBe(expectedValidity)
  }
}

const expectAtomWithoutExpressiveExpectedArg = (
  isValidEmail: ReadableAtom<boolean>,
  expectedValidity: boolean
) => {
  return () => {
    expect(isValidEmail.get()).toBe(expectedValidity)
  }
}
