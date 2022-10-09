import { map } from 'nanostores'
import type { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'

export const createLoginStore = (auth: Auth) => {
  const formMap = map<SignInPayload>({
    email: '',
    password: '',
  })

  const input = (key: SignInPayloadKey, value: string) => {
    formMap.setKey(key, value)
  }

  const submit = async () => {
    const payload = formMap.get()
    // await auth.signIn(payload)
    await fetch('http://127.0.0.1:3000/api/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  }

  return { input, submit }
}

type SignInPayload = {
  email: string
  password: string
}
type Auth = Pick<SupabaseAuthClient, 'signIn'>

export type SignInPayloadKey = keyof SignInPayload
