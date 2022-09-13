import { describe, it } from 'vitest'
import { createSteps } from './steps/registration'

describe('Registration', () => {
  it('success', async () => {
    const steps = createSteps()

    steps.givenRegisteredStudents([
      {
        email: 'harry.potter@hogwarts.com',
        nickname: 'Harry',
        password: 'Hedwig2000',
      },
    ])

    await steps.whenNewStudentRegister(
      'hermione.granger@hogwarts.com',
      'Hermione',
      '[1l0v3R0n]'
    )

    steps.thenNewStudentIsRegistered([
      {
        email: 'harry.potter@hogwarts.com',
        nickname: 'Harry',
        password: 'Hedwig2000',
      },
      {
        email: 'hermione.granger@hogwarts.com',
        nickname: 'Hermione',
        password: '[1l0v3R0n]',
      },
    ])
  })

  it('fails with validation errors', async () => {
    const steps = createSteps()

    steps.givenRegisteredStudents([
      {
        email: 'harry.potter@hogwarts.com',
        nickname: 'Harry',
        password: 'Hedwig2000',
      },
    ])

    await steps.whenNewStudentRegister(
      'hermione.granger@hogwarts',
      '',
      'badpassword'
    )

    steps.thenCausedValidationErrorsAre([
      'EmailFormatError: Email is not valid',
      'RequiredError: Nickname is required',
      'PasswordFormatError: Password is not valid',
    ])
  })
})
