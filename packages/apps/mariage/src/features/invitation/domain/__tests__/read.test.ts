import { test } from 'vitest'
import { buildSteps } from './steps/read'

test('Read Invitation Card', () => {
  const steps = buildSteps()

  steps.givenInvitationCards([
    ['Loid Forger', 'Anya Forger', 'Yor Forger'],
    ['Edward Elric', 'Alphonse Elric'],
  ])

  steps.whenRepresentativeReadsHisInvitationCard('card-001')

  steps.thenFamilyMembersReadedAre(
    new Set(['Loid Forger', 'Anya Forger', 'Yor Forger'])
  )
})
