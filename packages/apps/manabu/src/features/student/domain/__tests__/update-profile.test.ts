import { describe, it } from 'vitest'
import { createSteps } from './steps/update-profile'

describe('Update Profile', () => {
  it('updates password', () => {
    const steps = createSteps()

    steps.givenProfileStudent({
      email: 'harry.potter@hogwarts.com',
      nickname: 'Harry',
      password: '(hedwig2000)',
    })

    steps.whenStudentUpdateProfile({
      password: '[HedWiG3642]',
    })

    steps.thenProfileDataAre({
      email: 'harry.potter@hogwarts.com',
      nickname: 'Harry',
      password: '[HedWiG3642]',
    })
  })

  it('updates nickname and email', () => {
    const steps = createSteps()

    steps.givenProfileStudent({
      email: 'harry.potter@hogwarts.com',
      nickname: 'Harry',
      password: '(hedwig2000)',
    })

    steps.whenStudentUpdateProfile({
      email: 'hp@minister.com',
      nickname: 'Mr Potter',
    })

    steps.thenProfileDataAre({
      email: 'hp@minister.com',
      nickname: 'Mr Potter',
      password: '(hedwig2000)',
    })
  })

  it('fails with validation error', () => {})
})
