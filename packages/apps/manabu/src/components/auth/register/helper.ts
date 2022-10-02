import type { Student } from '../../../features/student/domain/entities'
import type { Register } from '../../../features/student/domain/interactor'

import { atom, computed } from 'nanostores'
import {
  createRegisterDTO,
  RegisterDTO,
} from '../../../features/student/domain/dto'

export const createRegisterHelper = (register: Register) => {
  const formState = new Map<RegisterFormKey, string>()

  const loading = atom(false)

  const registerDTOAtom = atom<RegisterDTO>(createRegisterDTO('', '', ''))

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

  const invalidByErrors = (errors: string[]) => {
    validity.set({
      email: !errors.includes('EmailFormatError'),
      nickname: !errors.includes('NicknameRequiredError'),
      password: !errors.includes('PasswordFormatError'),
    })
  }

  const tryCreateStudent = () => {
    const registerDTO = createRegisterDTO(
      formState.get('email') || '',
      formState.get('nickname') || '',
      formState.get('password') || ''
    )

    if (registerDTO.isRight()) {
      registerDTOAtom.set(registerDTO)
      validAll()
      return
    }

    invalidByErrors(registerDTO.extract())
  }

  const submit = async () => {
    if (validity.get()) {
      loading.set(true)
      await register(registerDTOAtom.get())
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
