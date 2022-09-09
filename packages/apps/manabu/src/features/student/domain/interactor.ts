import type { Student } from './entities'
import type { StudentRepository } from './ports'

export const createStudentInteractor = (repository: StudentRepository) => {
  const register = async (student: Student) => {
    await repository.push(student)
  }

  return { register }
}
