import type { RegisterDTO, UpdateStudentDTO } from './dto'
import type { StudentRepository } from './ports'

export const createStudentInteractor = (repository: StudentRepository) => {
  const register = async (registerDTO: RegisterDTO) => {
    return await repository.signUp(registerDTO)
  }

  const update = async (updateStudentDTO: UpdateStudentDTO) => {
    await repository.update(updateStudentDTO)
  }

  return { register, update }
}

type StudentInteractor = ReturnType<typeof createStudentInteractor>

export type Register = StudentInteractor['register']
