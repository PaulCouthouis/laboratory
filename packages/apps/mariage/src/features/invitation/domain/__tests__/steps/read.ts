import type { FamilyMembers } from '../../values'

import { expect } from 'vitest'
import { buildReadInvitationCard } from '../../ports/presenter'
import { buildFakeInvitationCardRepository } from '../output/repository'

export const buildSteps = () => {
  const fakeRepository = buildFakeInvitationCardRepository()
  const readInvitationCard = buildReadInvitationCard(fakeRepository)

  let receivedFamilyMembers: FamilyMembers

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

  const thenFamilyMembersReadedAre = (expectedFamilyMembers: FamilyMembers) => {
    expect(receivedFamilyMembers).toEqual(expectedFamilyMembers)
  }

  return {
    givenInvitationCards,
    whenRepresentativeReadsHisInvitationCard,
    thenFamilyMembersReadedAre,
  }
}
