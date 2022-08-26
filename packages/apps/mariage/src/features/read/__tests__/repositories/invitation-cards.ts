import type { FamilyMembers, InvitationCardId } from '../../values'

export const buildFakeInvitationCardRepository = () => {
  const invitationCards: Map<InvitationCardId, FamilyMembers> = new Map()

  const initInvitationCards = (
    initialInvitationCards: Array<Array<string>>
  ) => {
    initialInvitationCards.forEach((familyMembers, index) => {
      invitationCards.set(`card-00${index + 1}`, new Set(familyMembers))
    })
  }

  const getFamilyMembers = (id: InvitationCardId) => {
    const familyMembers = invitationCards.get(id)

    if (!familyMembers) {
      throw 'The invitation card does not exist'
    }

    return familyMembers
  }

  return { initInvitationCards, getFamilyMembers }
}
