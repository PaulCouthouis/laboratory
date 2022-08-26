export const buildFakeInvitationCardRepository = () => {
  const invitationCards: Map<string, Set<string>> = new Map()

  const initInvitationCards = (
    initialInvitationCards: Array<Array<string>>
  ) => {
    initialInvitationCards.forEach((familyMembers, index) => {
      invitationCards.set(`card-00${index + 1}`, new Set(familyMembers))
    })
  }

  const getInvitationCardBy = (id: string) => {
    const invitationCard = invitationCards.get(id)

    if (!invitationCard) {
      throw 'The invitation card does not exist'
    }

    return invitationCard
  }

  return { initInvitationCards, getInvitationCardBy }
}
