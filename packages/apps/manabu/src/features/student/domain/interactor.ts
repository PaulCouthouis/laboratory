import type { RegisterDTO, UpdateStudentDTO } from './dto'
import type { RegistrationResolved, StudentRepository } from './ports'

export const createStudentInteractor = (
  repository: StudentRepository,
  registrationResolved: RegistrationResolved
) => {
  const register = async (registerDTO: RegisterDTO) => {
    await repository.signUp(registerDTO)
    registrationResolved.set(true)
  }

  const update = async (updateStudentDTO: UpdateStudentDTO) => {
    await repository.update(updateStudentDTO)
  }

  return { register, update }
}

type StudentInteractor = ReturnType<typeof createStudentInteractor>

export type Register = StudentInteractor['register']
