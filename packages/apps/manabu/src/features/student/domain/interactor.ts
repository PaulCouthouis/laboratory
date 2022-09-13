import type { Student } from './entities'
import type { StudentRepository } from './ports'

export const createStudentInteractor = (repository: StudentRepository) => {
  const register = async (student: Student) => {
    await repository.push(student)
  }

  const updateProfile = async (updateStudentDTO: Partial<Student>) => {
    await repository.putCurrent(updateStudentDTO)
  }

  return { register, updateProfile }
}
