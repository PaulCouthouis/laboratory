import { expect } from 'vitest'
import { buildReplyToInvitation } from '../../ports/controller'
import { buildReplyCardDeliveryService } from '../output/service'

export const buildSteps = () => {
  const fakeDeliveryService = buildReplyCardDeliveryService()
  const replyToInvitation = buildReplyToInvitation(fakeDeliveryService)

  const givenInvitationCard = (initialInvitationCard: {
    invitationCardId: string
    members: Set<string>
  }) => {
    fakeDeliveryService.initInvitationCard(initialInvitationCard)
  }

  const whenRepresentativeReplyToInvitation = (replyCard: {
    members: Array<{
      diet?: string
      name: string
      status: 'accept' | 'decline' | 'wait'
    }>
    message: string
  }) => {
    replyToInvitation(replyCard)
  }

  const thenOrganizerReceivesTheReply = (expectedReplyCard: {
    invitationCardId: string
    members: Array<{
      diet?: string
      name: string
      status: 'accept' | 'decline' | 'wait'
    }>
    message: string
  }) => {
    const deliveredReplyCard = fakeDeliveryService.getDeliveredReplyCard()
    expect(deliveredReplyCard).toEqual(expectedReplyCard)
  }

  return {
    givenInvitationCard,
    whenRepresentativeReplyToInvitation,
    thenOrganizerReceivesTheReply,
  }
}
