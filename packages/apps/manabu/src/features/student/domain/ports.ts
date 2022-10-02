import type { RegisterDTO } from './dto'
import type { Student } from './entities'

export interface StudentRepository {
  signUp(createStudentDTO: RegisterDTO): Promise<void>
  update(updateStudentDTO: Partial<Student>): Promise<void>
}
