import type { Register } from '../../../features/student/domain/interactor'

import { atom, map } from 'nanostores'
import {
  createStudent,
  Student,
} from '../../../features/student/domain/entities'

export const createRegisterHelper = (register: Register) => {
  const formState = new Map<RegisterFormKey, string>()

  const student = atom<Student>({
    email: '',
    nickname: '',
    password: '',
  })
  const validity = atom(false)

  const input = (key: RegisterFormKey, value: string) => {
    formState.set(key, value)
    onInput()
  }

  const onInput = () => {
    try {
      student.set(
        createStudent(
          formState.get('email') || '',
          formState.get('nickname') || '',
          formState.get('password') || ''
        )
      )
      validity.set(true)
    } catch {
      validity.set(false)
    }
  }

  const submit = async () => {
    if (validity.get()) {
      await register(student.get())
    }
  }

  return { input, submit, validity }
}

type RegisterFormKey = keyof Student
