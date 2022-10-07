import { atom } from 'nanostores'

import { supabase } from '../../database/supabase'
import { createStudentRepositoryInSupabase } from './gateway/supabase'
import { createStudentInteractor } from './domain/interactor'

const repository = createStudentRepositoryInSupabase(supabase.auth)

export const isResolved = atom(false)
export const { register } = createStudentInteractor(repository, isResolved)
