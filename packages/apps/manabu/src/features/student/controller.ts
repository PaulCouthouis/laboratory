import { supabase } from '../../database/supabase'
import { createStudentRepositoryInSupabase } from './gateway/supabase'
import { createStudentInteractor } from './domain/interactor'

const repository = createStudentRepositoryInSupabase(supabase.auth)
const interactor = createStudentInteractor(repository)

export const { register } = interactor
