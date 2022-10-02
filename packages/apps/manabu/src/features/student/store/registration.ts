import type { Register } from '../domain/interactor'

import { createRegisterDTO } from '../domain/dto'
import { computed, map } from 'nanostores'
import type { Student } from '../domain/entities'

export const createRegistrationStore = (register: Register) => {
  const formMap = map<{ [k in RegistrationFormKey]: string }>()

  const dtoAtom = computed(formMap, ({ email, nickname, password }) => {
    return createRegisterDTO(email, nickname, password)
  })

  const validationErrors = computed(dtoAtom, (dtoAtom) => {
    return dtoAtom.isRight() ? [] : dtoAtom.extract()
  })

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
    await register(dtoAtom.get())
  }

  return {
    actions: { input, submit },
    state: { isValidForm, isValidEmail, isValidNickname, isValidPassword },
  }
}

type RegistrationFormKey = keyof Student
