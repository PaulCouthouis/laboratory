import type { Student } from '../../../entities'

export const createFakeStudentRepository = () => {
  let students: Student[]

  const getAll = () => students

  const init = (initialStudents: Student[]) => {
    students = initialStudents
  }

  const push = async (student: Student) => {
    students = [...students, student]
    await Promise.resolve()
  }

  return { getAll, init, push }
}
