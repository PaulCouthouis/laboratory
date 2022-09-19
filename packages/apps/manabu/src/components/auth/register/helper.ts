import type { Register } from '../../../features/student/domain/interactor'

import { atom, computed } from 'nanostores'
import {
  createStudent,
  Student,
} from '../../../features/student/domain/entities'

export const createRegisterHelper = (register: Register) => {
  const formState = new Map<RegisterFormKey, string>()

  const loading = atom(false)

  const student = atom<Student>({
    email: '',
    nickname: '',
    password: '',
  })

  const validity = atom({
    email: false,
    nickname: false,
    password: false,
  })

  const getValidityComputed = (key: RegisterFormKey) =>
    computed(validity, (v: Validities) => v[key])

  const isValidEmail = getValidityComputed('email')
  const isValidNickname = getValidityComputed('nickname')
  const isValidPassword = getValidityComputed('password')

  const isValidForm = computed(validity, (validities) => {
    const isValid = (b: boolean) => b
    const values = Object.values(validities)

    return values.every(isValid)
  })

  const input = (key: RegisterFormKey, value: string) => {
    formState.set(key, value)
    tryCreateStudent()
  }

  const invalidByErrors = (errors: Error[]) => {
    const errorNames = errors.map(({ name }) => name)
    validity.set({
      email: !errorNames.includes('EmailFormatError'),
      nickname: !errorNames.includes('NicknameRequiredError'),
      password: !errorNames.includes('PasswordFormatError'),
    })
  }

  const tryCreateStudent = () => {
    try {
      const newStudent = createStudent(
        formState.get('email') || '',
        formState.get('nickname') || '',
        formState.get('password') || ''
      )
      student.set(newStudent)
      validAll()
    } catch (e) {
      invalidByErrors(e as Error[])
    }
  }

  const submit = async () => {
    if (validity.get()) {
      loading.set(true)
      await register(student.get())
      loading.set(false)
    }
  }

  const validAll = () => {
    validity.set({
      email: true,
      nickname: true,
      password: true,
    })
  }

  return {
    input,
    loading,
    isValidForm,
    isValidEmail,
    isValidNickname,
    isValidPassword,
    submit,
  }
}

export type RegisterFormKey = keyof Student

type Validities = {
  [k in RegisterFormKey]: boolean
}
