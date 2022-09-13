import type { Student } from './entities'
import { createValidationErrors } from './validator'

export const createUpdateStudentDTO = (partialStudent: Partial<Student>) => {
  const errors = createValidationErrors(partialStudent)

  if (errors.length > 0) {
    throw errors
  }

  return partialStudent
}
