import { describe, expect, it } from 'vitest'
import { createPasswordRulesChecker } from '../checker'

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


