import type { Student } from '../../../entities'

export const createFakeStudentRepository = () => {
  let _current: Student
  let _students: Student[]

  const push = async (student: Student) => {
    _students = [..._students, student]
    await Promise.resolve()
  }

  const putCurrent = async (updateStudentDTO: Partial<Student>) => {
    _current = {
      ..._current,
      ...updateStudentDTO,
    }
    await Promise.resolve()
  }

  return {
    push,
    putCurrent,
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
