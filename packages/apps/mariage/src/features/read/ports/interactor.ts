import type { InvitationCardId } from '../values'
import type { InvitationCardRepository } from './repositories'

export const buildReadInvitationCard =
  (invitationCardRepository: InvitationCardRepository) =>
  (id: InvitationCardId) => {
    return invitationCardRepository.getInvitationCardBy(id)
  }
