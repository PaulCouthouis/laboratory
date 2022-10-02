import type { RegisterDTO, UpdateStudentDTO } from './dto'

export interface StudentRepository {
  signUp(createStudentDTO: RegisterDTO): Promise<void>
  update(updateStudentDTO: UpdateStudentDTO): Promise<void>
}
