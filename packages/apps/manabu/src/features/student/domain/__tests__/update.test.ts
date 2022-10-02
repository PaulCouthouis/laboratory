import { describe, it } from 'vitest'
import { createSteps } from './steps/update-profile'

describe('Update Profile', () => {
  it('updates password', async () => {
    const steps = createSteps()

    steps.givenProfileStudent({
      email: 'harry.potter@hogwarts.com',
      nickname: 'Harry',
      password: '(hedwig2000)',
    })

    await steps.whenStudentUpdateProfile({
      password: '[HedWiG3642]',
    })

    steps.thenProfileDataAre({
      email: 'harry.potter@hogwarts.com',
      nickname: 'Harry',
      password: '[HedWiG3642]',
    })
  })

  it('updates nickname and email', async () => {
    const steps = createSteps()

    steps.givenProfileStudent({
      email: 'harry.potter@hogwarts.com',
      nickname: 'Harry',
      password: '(hedwig2000)',
    })

    await steps.whenStudentUpdateProfile({
      email: 'hp@minister.com',
      nickname: 'Mr Potter',
    })

    steps.thenProfileDataAre({
      email: 'hp@minister.com',
      nickname: 'Mr Potter',
      password: '(hedwig2000)',
    })
  })
})
