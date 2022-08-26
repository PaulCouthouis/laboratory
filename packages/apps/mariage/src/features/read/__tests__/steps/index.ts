import { expect } from 'vitest'
import { buildReadInvitationCard } from '../../ports/interactor'
import { buildFakeInvitationCardRepository } from '../repositories/invitation-cards'

export const buildSteps = () => {
  const fakeRepository = buildFakeInvitationCardRepository()
  const readInvitationCard = buildReadInvitationCard(fakeRepository)

  let receivedFamilyMembers: Set<string>

  const givenInvitationCards = (
    initialInvitationCards: Array<Array<string>>
  ) => {
    fakeRepository.initInvitationCards(initialInvitationCards)
  }

  const whenRepresentativeReadsHisInvitationCard = (
    invitationCardId: string
  ) => {
    receivedFamilyMembers = readInvitationCard(invitationCardId)
  }

  const thenFamilyMembersReadedAre = (expectedFamilyMembers: Set<string>) => {
    expect(receivedFamilyMembers).toEqual(expectedFamilyMembers)
  }

  return {
    givenInvitationCards,
    whenRepresentativeReadsHisInvitationCard,
    thenFamilyMembersReadedAre,
  }
}
