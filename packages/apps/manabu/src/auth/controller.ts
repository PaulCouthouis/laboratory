import { supabase } from '../database/supabase'
import { createAuthenticator } from './service'

const auth = createAuthenticator(supabase.auth)

export const { signIn } = auth
