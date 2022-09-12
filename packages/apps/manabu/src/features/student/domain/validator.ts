import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import isStrongPassword from 'validator/lib/isStrongPassword'

export const createValidationErrors = (
  email: string,
  nickname: string,
  password: string
) => {
  const studentValidationSteps = [
    { createError: createEmailError, isValid: isEmail(email) },
    { createError: createNicknameError, isValid: !isEmpty(nickname) },
    {
      createError: createPasswordFormatError,
      isValid: isStrongPassword(password),
    },
  ]

  const pushErrorIfInvalid = (
    errorAccumulator: Error[],
    { createError, isValid }: ValidationStep
  ) => {
    return isValid ? errorAccumulator : [...errorAccumulator, createError()]
  }

  return studentValidationSteps.reduce<Error[]>(pushErrorIfInvalid, [])
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
  'RequiredError',
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
