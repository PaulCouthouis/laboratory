import { atom, computed } from 'nanostores'

export const createPasswordRulesChecker = () => {
  const password = atom('')

  const hasFigure = computed(password, (p) => p.search(/[0-9]/) > -1)
  const hasGoodLength = computed(password, (p) => p.length >= 8)
  const hasLowerCase = computed(password, (p) => p.search(/[a-z]/) > -1)
  const hasSpecialChar = computed(
    password,
    (p) => p.search(/[-#!$@%^&*()_+|~=`{}[\]:";'<>?,./ ]/) > -1
  )
  const hasUpperCase = computed(password, (p) => p.search(/[A-Z]/) > -1)

  const input = (newPassword: string) => {
    password.set(newPassword)
  }

  return {
    hasFigure,
    hasGoodLength,
    hasLowerCase,
    hasSpecialChar,
    hasUpperCase,
    input,
  }
}
