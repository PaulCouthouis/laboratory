import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import isStrongPassword from 'validator/lib/isStrongPassword'
import type { Student } from './entities'

export const createValidationErrors = (partialStudent: Partial<Student>) => {
  const studentValidationSteps = createValidationSteps(partialStudent)

  const pushErrorIfInvalid = (
    errorAccumulator: Error[],
    { createError, isValid }: ValidationStep
  ) => {
    return isValid ? errorAccumulator : [...errorAccumulator, createError()]
  }

  return studentValidationSteps.reduce<Error[]>(pushErrorIfInvalid, [])
}

const createValidationSteps = (partialStudent: Partial<Student>) => {
  const { email, nickname, password } = partialStudent
  let steps = new Array<ValidationStep>()

  if (email !== undefined) {
    steps = [{ createError: createEmailError, isValid: isEmail(email) }]
  }

  if (nickname !== undefined) {
    steps = [
      ...steps,
      { createError: createNicknameError, isValid: !isEmpty(nickname) },
    ]
  }

  if (password !== undefined) {
    steps = [
      ...steps,
      {
        createError: createPasswordFormatError,
        isValid: isStrongPassword(password),
      },
    ]
  }

  return steps
}

const errorFactory = (name: string, message: string) => {
  return () => {
    const error = Error(message)
    error.name = name

    return error
  }
}

const createEmailError = errorFactory('EmailFormatError', 'Email is not valid')
const createNicknameError = errorFactory(
  'NicknameRequiredError',
  'Nickname is required'
)
const createPasswordFormatError = errorFactory(
  'PasswordFormatError',
  'Password is not valid'
)

type ValidationStep = {
  createError: () => Error
  isValid: boolean
}
