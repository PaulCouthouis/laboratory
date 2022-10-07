import { describe, it } from 'vitest'
import { createSteps } from './steps'

describe('Registration store', () => {
  it('submits a valid new student', async () => {
    const steps = createSteps()

    steps.givenRegisterForm(
      'harry.potter@hogwarts.com',
      'Harry',
      '[Hedwig2000]'
    )

    await steps.whenStudentSubmit()

    steps.thenStudentIsRegistered()
  })

  it('submits a invalid new student', async () => {
    const steps = createSteps({
      withRegistrationFail: true,
    })

    steps.givenRegisterForm(
      'harry.potter@hogwarts.com',
      'Harry',
      '[Hedwig2000]'
    )

    await steps.whenStudentSubmit()

    steps.thenStudentIsNotRegistered()
  })

  it('alerts the password invalidity', () => {
    const steps = createSteps()

    steps.givenRegisterForm(
      'harry.potter@hogwarts.com',
      'Harry',
      '[Hedwig2000]'
    )

    steps.whenInputPassword('Hedwig2000')

    steps.thenPasswordValidityIs(false)
    steps.thenFormValidityIs(false)
  })

  it('alerts the nickname and email invalidity', () => {
    const steps = createSteps()

    steps.givenRegisterForm(
      'harry.potter@hogwarts.com',
      'Harry',
      '[Hedwig2000]'
    )

    steps.whenInputNickname('')
    steps.whenInputEmail('harry.potter@hogwarts')

    steps.thenNicknameValidityIs(false)
    steps.thenEmailValidityIs(false)
  })
})
