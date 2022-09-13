import type { Student } from './entities'

export interface StudentRepository {
  push(student: Student): Promise<void>
  putCurrent(updateStudentDTO: Partial<Student>): Promise<void>
}
