import type { Student } from './entities'
import type { StudentRepository } from './ports'

export const createStudentInteractor = (repository: StudentRepository) => {
  const register = async (student: Student) => {
    await repository.signUp(student)
  }

  const update = async (updateStudentDTO: Partial<Student>) => {
    await repository.update(updateStudentDTO)
  }

  return { register, update }
}
