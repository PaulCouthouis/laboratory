import { decode } from 'jsonwebtoken'
import type { InvitationCardRepository } from '../domain/output/repositories'
import type { InvitationCardId } from '../domain/values'

export const buildInvitationCardRepository: () => InvitationCardRepository =
  () => {
    const getFamilyMembers = (invitationCardId: InvitationCardId) => {
      const decoded = decode(invitationCardId) as FamilyMembersJWT
      return new Set(decoded.members)
    }

    return { getFamilyMembers }
  }

interface FamilyMembersJWT {
  members: string[]
}
