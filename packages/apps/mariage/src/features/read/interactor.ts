import type { FamilyMembers, InvitationCardId } from './values'

export type ReadInvitationCard = (
  invitationCardId: InvitationCardId
) => FamilyMembers
