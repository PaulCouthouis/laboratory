import type { FamilyMembers, InvitationCardId } from '../values'

export interface InvitationCardRepository {
  getInvitationCardBy(id: InvitationCardId): FamilyMembers
}
