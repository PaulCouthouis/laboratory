import type { FamilyMembers, InvitationCardId } from '../values'

export interface InvitationCardRepository {
  getFamilyMembers(invitationCardId: InvitationCardId): FamilyMembers
}
