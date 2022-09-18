import { describe, expect, it } from 'vitest'
import { atom, computed } from 'nanostores'

describe('Password rules checker', () => {
  it('checks that the password has more than 8 characters', () => {
    const { hasGoodLength, input } = createPasswordRulesChecker()

    input('12345678')

    expect(hasGoodLength.get()).toEqual(true)
  })

  it('checks that the password has lower case', () => {
    const { hasLowerCase, input } = createPasswordRulesChecker()

    input('q')

    expect(hasLowerCase.get()).toEqual(true)
  })

  it('checks that the password has upper case', () => {
    const { hasUpperCase, input } = createPasswordRulesChecker()

    input('M')

    expect(hasUpperCase.get()).toEqual(true)
  })

  it('checks that the password has figure', () => {
    const { hasFigure, input } = createPasswordRulesChecker()

    input('9')

    expect(hasFigure.get()).toEqual(true)
  })

  it('checks that the password has special char', () => {
    const { hasSpecialChar, input } = createPasswordRulesChecker()

    input('[')

    expect(hasSpecialChar.get()).toEqual(true)
  })
})

const createPasswordRulesChecker = () => {
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
