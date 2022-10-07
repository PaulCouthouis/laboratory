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

    const test = await auth.signIn(payload)
    console.log('fire', test)
  }

  return { input, submit }
}

type SignInPayload = {
  email: string
  password: string
}
type Auth = Pick<SupabaseAuthClient, 'signIn'>

export type SignInPayloadKey = keyof SignInPayload
