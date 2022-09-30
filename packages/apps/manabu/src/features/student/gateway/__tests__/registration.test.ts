import { expect, test, vitest } from 'vitest'
import { createStudent } from '../../domain/entities'
import { createStudentInteractor } from '../../domain/interactor'
import { createStudentRepositoryInSupabase } from '../supabase'

test('Registration in supabase', async () => {
  const signUp = vitest.fn()
  const update = vitest.fn()

  const repository = createStudentRepositoryInSupabase({ signUp, update })
  const interactor = createStudentInteractor(repository)
  const student = createStudent(
    'harry.potter@hogwarts.com',
    'Harry',
    '[Hedwig2000]'
  )

  await interactor.register(student)

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
})
