import { expect, test, vitest } from 'vitest'
import { createAuthenticator } from '../service'

test('Login with supabase', async () => {
  const signIn = vitest.fn()

  const authenticator = createAuthenticator({ signIn })

  await authenticator.signIn({
    email: 'harry.potter@hogwarts.com',
    password: '[Hedwig2000]',
  })

  expect(signIn).toBeCalledTimes(1)
  expect(signIn).toBeCalledWith({
    email: 'harry.potter@hogwarts.com',
    password: '[Hedwig2000]',
  })
})
