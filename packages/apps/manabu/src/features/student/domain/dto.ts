import { Either, Left, Right } from 'purify-ts'
import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import isStrongPassword from 'validator/lib/isStrongPassword'
import { createValidationErrors } from './validator'

export const createUpdateStudentDTO = (partialStudent: Partial<Student>) => {
  const errors = createValidationErrors(partialStudent)

  if (errors.length > 0) {
    throw errors
  }

  return Object.freeze(partialStudent)
}

export const createRegisterDTO = (
  newEmail: string,
  newNickname: string,
  newPassword: string
) => {
  const email = createEmail(newEmail)
  const nickname = createNickname(newNickname)
  const password = createPassword(newPassword)

  const errors = Either.lefts([email, nickname, password])
  const hasErrors = errors.length > 0

  return hasErrors
    ? Left(errors)
    : Right({
        email: email.extract(),
        nickname: nickname.extract(),
        password: password.extract(),
      })
}

const createEmail = (s: string) => {
  return !isEmail(s) ? Left('EmailFormatError') : Right(s)
}

const createNickname = (s: string) => {
  return isEmpty(s) ? Left('NicknameRequiredError') : Right(s)
}

const createPassword = (s: string) => {
  return !isStrongPassword(s) ? Left('PasswordFormatError') : Right(s)
}

export type RegisterDTO = ReturnType<typeof createRegisterDTO>
