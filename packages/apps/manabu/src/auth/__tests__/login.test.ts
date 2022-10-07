import { expect, test, vitest } from 'vitest'
import { createLoginStore } from '../login'

test('Login with supabase', async () => {
  const signIn = vitest.fn()

  const { input, submit } = createLoginStore(signIn)

  input('email', 'harry.potter@hogwarts.com')
  input('password', '[Hedwig2000]')
  await submit()

  expect(signIn).toBeCalledTimes(1)
  expect(signIn).toBeCalledWith({
    email: 'harry.potter@hogwarts.com',
    password: '[Hedwig2000]',
  })
})
