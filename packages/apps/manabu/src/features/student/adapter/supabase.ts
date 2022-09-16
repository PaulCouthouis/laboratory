import type { UserAttributes } from '@supabase/supabase-js'
import type { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'
import type { Student } from '../domain/entities'

type Auth = Pick<SupabaseAuthClient, 'signUp' | 'update'>
type UpdatePayload = Pick<UserAttributes, 'email' | 'password' | 'data'>

export const createStudentRepositoryInSupabase = (auth: Auth) => {
  const push = async ({ email, password, nickname }: Student) => {
    const credentials = { email, password }
    const data = { nickname }

    await auth.signUp(credentials, {
      data,
    })
  }

  const putCurrent = async (updateStudentDTO: Partial<Student>) => {
    const payload = createUpdatePayload(updateStudentDTO)
    await auth.update(payload)
  }

  return { push, putCurrent }
}

const createUpdatePayload = (updateStudentDTO: Partial<Student>) => {
  const updateStudentDTOEntries = Object.entries(updateStudentDTO)

  const toUpdatePayload = (
    prevObj: UpdatePayload,
    [key, value]: [string, string]
  ) => {
    const isNickname = key === 'nickname'
    const newEntry = {
      [key]: value,
    }

    if (isNickname) {
      return {
        ...prevObj,
        data: newEntry,
      }
    }

    return {
      ...prevObj,
      ...newEntry,
    }
  }

  return updateStudentDTOEntries.reduce<UpdatePayload>(toUpdatePayload, {})
}
