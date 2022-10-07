import { describe, it } from 'vitest'
import { createSteps } from './steps'

describe('Password check rules', () => {
  it('checks that the password has more than 8 characters', () => {
    const steps = createSteps()

    steps.givenRegisterForm('harry.potter@hogwarts.com', 'Harry', '')

    steps.whenInputPassword('12345678')

    steps.thenPasswordGoodLengthIs(true)
  })

  it('checks that the password has lower case', () => {
    const steps = createSteps()

    steps.givenRegisterForm('harry.potter@hogwarts.com', 'Harry', '')

    steps.whenInputPassword('q')

    steps.thenPasswordLowerCaseIs(true)
  })

  it('checks that the password has upper case', () => {
    const steps = createSteps()

    steps.givenRegisterForm('harry.potter@hogwarts.com', 'Harry', '')

    steps.whenInputPassword('M')

    steps.thenPasswordUpperCaseIs(true)
  })

  it('checks that the password has figure', () => {
    const steps = createSteps()

    steps.givenRegisterForm('harry.potter@hogwarts.com', 'Harry', '')

    steps.whenInputPassword('9')

    steps.thenPasswordFigureIs(true)
  })

  it('checks that the password has special char', () => {
    const steps = createSteps()

    steps.givenRegisterForm('harry.potter@hogwarts.com', 'Harry', '')

    steps.whenInputPassword('[')

    steps.thenPasswordSpecialCharIs(true)
  })
})
