import { describe, expect, it } from 'vitest'
import {
  createStudent,
  Student,
} from '../../../../features/student/domain/entities'

describe('Register Helper', () => {
  it('validates the form', () => {
    const steps = createSteps()

    steps.givenEmptyRegisterForm()

    steps.whenInputNickname('Harry')
    steps.whenInputEmail('harry.potter@hogwarts.com')
    steps.whenInputPassword('[Hedwig2000]')

    steps.thenFormValidityIs(true)
    steps.thenInputDataAre({
      email: 'harry.potter@hogwarts.com',
      nickname: 'Harry',
      password: '[Hedwig2000]',
    })
  })

  it('invalidates the nickname', () => {
    const steps = createSteps()

    steps.givenEmptyRegisterForm()

    steps.whenInputNickname('')
    steps.whenInputEmail('harry.potter@hogwarts.com')
    steps.whenInputPassword('[Hedwig2000]')

    steps.thenFormValidityIs(false)
  })
})

const createSteps = () => {
  const receivedInputData = new Map<keyof Student, string>()

  const givenEmptyRegisterForm = () => {
    receivedInputData.clear()
  }

  const whenInputNickname = (entryNickname: string) => {
    receivedInputData.set('nickname', entryNickname)
  }

  const whenInputEmail = (entryEmail: string) => {
    receivedInputData.set('email', entryEmail)
  }

  const whenInputPassword = (entryPassword: string) => {
    receivedInputData.set('password', entryPassword)
  }

  const thenFormValidityIs = (expectedValidity: boolean) => {
    let receivedValidity: boolean
    try {
      createStudent(
        receivedInputData.get('email') || '',
        receivedInputData.get('nickname') || '',
        receivedInputData.get('password') || ''
      )
      receivedValidity = true
    } catch {
      receivedValidity = false
    }

    expect(receivedValidity).toBe(expectedValidity)
  }

  const thenInputDataAre = (expectedInputData: Student) => {
    expect(Object.fromEntries(receivedInputData)).toEqual(expectedInputData)
  }

  return {
    givenEmptyRegisterForm,
    whenInputNickname,
    whenInputEmail,
    whenInputPassword,
    thenFormValidityIs,
    thenInputDataAre,
  }
}
