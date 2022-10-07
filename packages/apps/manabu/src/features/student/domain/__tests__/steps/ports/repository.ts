import type { RegisterDTO, UpdateStudentDTO } from '../../../dto'
import type { Student } from '../../../entities'

export const createFakeStudentRepository = () => {
  let current: Student
  let students: Student[]

  const signUp = async (registerDTO: RegisterDTO) => {
    if (registerDTO.isRight()) {
      const newStudent = registerDTO.extract()
      students = [...students, newStudent]
      return await Promise.resolve({ ok: true })
    }
    return Promise.reject()
  }

  const update = async (updateStudentDTO: UpdateStudentDTO) => {
    console.log(updateStudentDTO.extract())
    if (updateStudentDTO.isRight()) {
      current = {
        ...current,
        ...updateStudentDTO.extract(),
      }
      await Promise.resolve()
    }
  }

  return {
    signUp,
    update,
    get current() {
      return current
    },
    get students() {
      return students
    },
    set current(newCurrent: Student) {
      current = newCurrent
    },
    set students(newStudents: Student[]) {
      students = newStudents
    },
  }
}
