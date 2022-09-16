import type { Student } from './entities'

export interface StudentRepository {
  signUp(student: Student): Promise<void>
  update(updateStudentDTO: Partial<Student>): Promise<void>
}
