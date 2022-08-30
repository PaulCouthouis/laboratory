import type { ReadInvitationCard } from '../interactor'
import type { InvitationCardRepository } from './repositories'

export const buildReadInvitationCard: BuildReadInvitationCard =
  (invitationCardRepository) => (id) => {
    return invitationCardRepository.getFamilyMembers(id)
  }

type BuildReadInvitationCard = (
  invitationCardRepository: InvitationCardRepository
) => ReadInvitationCard
