import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import isStrongPassword from 'validator/lib/isStrongPassword'

export const createStudent = (
  email: string,
  nickname: string,
  password: string
) => {
  if (!isEmail(email)) {
    throw 'Email is not valid'
  }

  if (isEmpty(nickname)) {
    throw 'Nickname is not valid'
  }

  if (!isStrongPassword(password)) {
    throw 'Password is not valid'
  }

  return { email, nickname, password }
}

export type Student = ReturnType<typeof createStudent>
