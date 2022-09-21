import type { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'

export const createAuthenticator = (auth: Auth) => {
  const signIn = async (payload: SignInPayload) => {
    await auth.signIn(payload)
  }

  return { signIn }
}

type Auth = Pick<SupabaseAuthClient, 'signIn'>
type SignInPayload = {
  email: string
  password: string
}
