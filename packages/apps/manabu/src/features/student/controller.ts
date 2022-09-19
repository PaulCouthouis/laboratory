import { createClient } from '@supabase/supabase-js'
import { createStudentRepositoryInSupabase } from './adapter/supabase'
import { createStudentInteractor } from './domain/interactor'

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_KEY
)

const repository = createStudentRepositoryInSupabase(supabase.auth)
const interactor = createStudentInteractor(repository)

export const { register } = interactor