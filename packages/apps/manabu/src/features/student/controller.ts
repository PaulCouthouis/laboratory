import { createClient } from '@supabase/supabase-js'
import { createStudentRepositoryInSupabase } from './adapter/supabase'
import { createStudentInteractor } from './domain/interactor'

export const createStudentController = () => {
  const supabase = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_KEY as string
  )

  const repository = createStudentRepositoryInSupabase(supabase.auth)
  const interactor = createStudentInteractor(repository)

  return interactor
}
