import type { FamilyMembers, InvitationCardId, ReplyCard } from './values'

export type ReadInvitationCard = (
  invitationCardId: InvitationCardId
) => FamilyMembers

export type ReplyToInvitation = (replyCard: ReplyCard) => void
