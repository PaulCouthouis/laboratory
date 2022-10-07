import { expect, test, vitest } from 'vitest'
import { createRegisterDTO } from '../../domain/dto'
import { createStudentInteractor } from '../../domain/interactor'
import { createStudentRepositoryInSupabase } from '../supabase'
import { atom } from 'nanostores'

test('Registration in supabase', async () => {
  const signUp = vitest.fn()
  const update = vitest.fn()

  const repository = createStudentRepositoryInSupabase({ signUp, update })
  const isResolved = atom(false)
  const interactor = createStudentInteractor(repository, isResolved)
  const registerDTO = createRegisterDTO(
    'harry.potter@hogwarts.com',
    'Harry',
    '[Hedwig2000]'
  )

  await interactor.register(registerDTO)

  expect(signUp).toBeCalledTimes(1)
  expect(signUp).toBeCalledWith(
    {
      email: 'harry.potter@hogwarts.com',
      password: '[Hedwig2000]',
    },
    {
      data: { nickname: 'Harry' },
    }
  )
  expect(isResolved.get()).toBe(true)
})
