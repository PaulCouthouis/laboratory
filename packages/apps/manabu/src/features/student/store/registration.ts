import type { Register } from '../domain/interactor'

import { createRegisterDTO } from '../domain/dto'
import { atom, computed, map } from 'nanostores'
import type { Student } from '../domain/entities'

export const createRegistrationStore = (register: Register) => {
  const formMap = map<{ [k in RegistrationFormKey]: string }>({
    email: '',
    nickname: '',
    password: '',
  })

  const dtoAtom = computed(formMap, ({ email, nickname, password }) => {
    return createRegisterDTO(email, nickname, password)
  })

  const isRejected = atom(false)
  const isResolved = atom(false)

  const loading = atom(false)

  const password = computed(formMap, ({ password }) => password)

  const validationErrors = computed(dtoAtom, (dtoAtom) => {
    return dtoAtom.isRight() ? [] : dtoAtom.extract()
  })

  const hasFigure = computed(password, (p) => p.search(/[0-9]/) > -1)

  const hasGoodLength = computed(password, (p) => p.length >= 8)

  const hasLowerCase = computed(password, (p) => p.search(/[a-z]/) > -1)

  const hasSpecialChar = computed(
    password,
    (p) => p.search(/[-#!$@%^&*()_+|~=`{}[\]:";'<>?,./ ]/) > -1
  )

  const hasUpperCase = computed(password, (p) => p.search(/[A-Z]/) > -1)

  const isValidForm = computed(validationErrors, (validationErrors) => {
    return validationErrors.length === 0
  })

  const isValidEmail = computed(validationErrors, (validationErrors) => {
    return !validationErrors.includes('EmailFormatError')
  })

  const isValidNickname = computed(validationErrors, (validationErrors) => {
    return !validationErrors.includes('NicknameRequiredError')
  })

  const isValidPassword = computed(validationErrors, (validationErrors) => {
    return !validationErrors.includes('PasswordFormatError')
  })

  const input = (key: RegistrationFormKey, value: string) => {
    formMap.setKey(key, value)
  }

  const submit = async () => {
    loading.set(true)
    const { ok } = await register(dtoAtom.get())

    isResolved.set(ok)
    isRejected.set(!ok)

    loading.set(false)
  }

  return {
    actions: { input, submit },
    state: {
      hasFigure,
      hasGoodLength,
      hasLowerCase,
      hasSpecialChar,
      hasUpperCase,
      loading,
      isRejected,
      isResolved,
      isValidForm,
      isValidEmail,
      isValidNickname,
      isValidPassword,
    },
  }
}

export type RegistrationFormKey = keyof Student
