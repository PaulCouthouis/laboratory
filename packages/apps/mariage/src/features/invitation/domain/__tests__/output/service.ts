export const buildReplyCardDeliveryService = () => {
  const invitationCard = {
    invitationCardId: '',
    members: new Set<string>(),
  }

  let deliveredReplyCard: {
    invitationCardId: string
    members: Array<{
      diet?: string
      name: string
      status: 'accept' | 'decline' | 'wait'
    }>
    message: string
  }

  const initInvitationCard = (initialInvitationCard: {
    invitationCardId: string
    members: Set<string>
  }) => {
    invitationCard.invitationCardId = initialInvitationCard.invitationCardId
    invitationCard.members = initialInvitationCard.members
  }

  const deliver = (replyCard: {
    members: Array<{
      diet?: string
      name: string
      status: 'accept' | 'decline' | 'wait'
    }>
    message: string
  }) => {
    deliveredReplyCard = {
      invitationCardId: invitationCard.invitationCardId,
      members: replyCard.members.map((member) => {
        if (invitationCard.members.has(member.name)) {
          return member
        }

        throw 'This member is not listed in the family'
      }),
      message: replyCard.message,
    }
    return Promise.resolve()
  }

  const getDeliveredReplyCard = () => deliveredReplyCard

  return { initInvitationCard, deliver, getDeliveredReplyCard }
}
