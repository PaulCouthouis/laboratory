import type { UserAttributes } from '@supabase/supabase-js'
import type { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'
import type { RegisterDTO, UpdateStudentDTO } from '../domain/dto'
import type { Student } from '../domain/entities'

type Auth = Pick<SupabaseAuthClient, 'signUp' | 'update'>
type UpdatePayload = Pick<UserAttributes, 'email' | 'password' | 'data'>

export const createStudentRepositoryInSupabase = (auth: Auth) => {
  const signUp = async (registerDTO: RegisterDTO) => {
    if (registerDTO.isRight()) {
      const { email, nickname, password } = registerDTO.extract()

      const credentials = { email, password }
      const data = { nickname }

      await auth.signUp(credentials, {
        data,
      })

      return
    }

    throw 'Invalid Register DTO format'
  }

  const update = async (updateStudentDTO: UpdateStudentDTO) => {
    if (updateStudentDTO.isRight()) {
      const payload = createUpdatePayload(updateStudentDTO.extract())

      await auth.update(payload)

      return
    }
  }

  return { signUp, update }
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
