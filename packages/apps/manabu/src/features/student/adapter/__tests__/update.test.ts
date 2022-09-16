import { expect, test, vitest } from 'vitest'
import { createUpdateStudentDTO } from '../../domain/dto'
import { createStudentInteractor } from '../../domain/interactor'
import { createStudentRepositoryInSupabase } from '../supabase'

test('Update email and nickname in supabase', async () => {
  const signUp = vitest.fn()
  const update = vitest.fn()

  const repository = createStudentRepositoryInSupabase({ signUp, update })
  const interactor = createStudentInteractor(repository)
  const updateStudentDTO = createUpdateStudentDTO({
    email: 'hp@minister.com',
    nickname: 'Mr Potter',
  })

  await interactor.update(updateStudentDTO)

  expect(update).toBeCalledTimes(1)
  expect(update).toBeCalledWith({
    email: 'hp@minister.com',
    data: { nickname: 'Mr Potter' },
  })
})

test('Update password in supabase', async () => {
  const signUp = vitest.fn()
  const update = vitest.fn()

  const repository = createStudentRepositoryInSupabase({ signUp, update })
  const interactor = createStudentInteractor(repository)
  const updateStudentDTO = createUpdateStudentDTO({
    password: '[HedWiG3642]',
  })

  await interactor.update(updateStudentDTO)

  expect(update).toBeCalledTimes(1)
  expect(update).toBeCalledWith({
    password: '[HedWiG3642]',
  })
})
