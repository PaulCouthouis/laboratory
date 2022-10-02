import type { RegisterDTO } from '../../../dto'
import type { Student } from '../../../entities'

export const createFakeStudentRepository = () => {
  let _current: Student
  let _students: Student[]

  const signUp = async (registerDTO: RegisterDTO) => {
    if (registerDTO.isRight()) {
      const newStudent = registerDTO.extract()
      _students = [..._students, newStudent]
      await Promise.resolve()
    }
  }

  const update = async (updateStudentDTO: Partial<Student>) => {
    _current = {
      ..._current,
      ...updateStudentDTO,
    }
    await Promise.resolve()
  }

  return {
    signUp,
    update,
    get current() {
      return _current
    },
    get students() {
      return _students
    },
    set current(newCurrent: Student) {
      _current = newCurrent
    },
    set students(newStudents: Student[]) {
      _students = newStudents
    },
  }
}
