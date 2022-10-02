import type { RegisterDTO } from './dto'
import type { Student } from './entities'
import type { StudentRepository } from './ports'

export const createStudentInteractor = (repository: StudentRepository) => {
  const register = async (registerDTO: RegisterDTO) => {
    await repository.signUp(registerDTO)
  }

  const update = async (updateStudentDTO: Partial<Student>) => {
    await repository.update(updateStudentDTO)
  }

  return { register, update }
}

type StudentInteractor = ReturnType<typeof createStudentInteractor>

export type Register = StudentInteractor['register']
