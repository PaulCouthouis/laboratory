import { createValidationErrors } from './validator'

export const createStudent = (
  email: string,
  nickname: string,
  password: string
) => {
  const errors = createValidationErrors({ email, nickname, password })

  if (errors.length > 0) {
    throw errors
  }

  return Object.freeze({ email, nickname, password })
}

export type Student = ReturnType<typeof createStudent>
