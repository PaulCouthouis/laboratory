import type { RegisterDTO, UpdateStudentDTO } from './dto'

export interface StudentRepository {
  signUp(createStudentDTO: RegisterDTO): Promise<void>
  update(updateStudentDTO: UpdateStudentDTO): Promise<void>
}

export interface RegistrationResolved {
  set(isResolved: boolean): void
}