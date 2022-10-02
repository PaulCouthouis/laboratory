import type { Student } from './entities'

import { Either, Left, Maybe, Right } from 'purify-ts'
import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import isStrongPassword from 'validator/lib/isStrongPassword'

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

export const createUpdateStudentDTO = (partialStudent: Partial<Student>) => {
  const newEmail = Maybe.fromNullable(partialStudent.email)
  const newNickname = Maybe.fromNullable(partialStudent.nickname)
  const newPassword = Maybe.fromNullable(partialStudent.password)

  const updateDTOMap = new Map<keyof Student, Either<string, string>>()

  if (newEmail.isJust()) {
    updateDTOMap.set('email', createEmail(newEmail.extract()))
  }

  if (newNickname.isJust()) {
    updateDTOMap.set('nickname', createNickname(newNickname.extract()))
  }

  if (newPassword.isJust()) {
    updateDTOMap.set('password', createPassword(newPassword.extract()))
  }

  const eithers = Array.from(updateDTOMap.values())
  const errors = Either.lefts(eithers)
  const hasErrors = errors.length > 0

  if (hasErrors) {
    return Left(errors)
  }

  const keys = Array.from(updateDTOMap.keys())
  const values = eithers.map((v) => v.extract())

  const object = buildObjectFrom(keys, values)

  return Right(object)
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

const buildObjectFrom = (keys: string[], values: string[]) => {
  const toKeyValue = (acc: Partial<Student>, key: string, index: number) => {
    return {
      ...acc,
      [key]: values[index],
    }
  }

  return keys.reduce<Partial<Student>>(toKeyValue, {})
}

export type RegisterDTO = ReturnType<typeof createRegisterDTO>
export type UpdateStudentDTO = ReturnType<typeof createUpdateStudentDTO>
