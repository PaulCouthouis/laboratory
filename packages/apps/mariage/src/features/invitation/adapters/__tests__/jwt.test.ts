import { expect, test } from 'vitest'
import { buildInvitationCardRepository } from '../jwt'

test('jwt integration', () => {
  const repository = buildInvitationCardRepository()
  const familyMembers = repository.getFamilyMembers(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJzIjpbIkxvaWQgRm9yZ2VyIiwiQW55YSBGb3JnZXIiLCJZb3IgRm9yZ2VyIl19.tTkX3buJQ3j3E5AusUDEZcTOk2cpkLB-g8kTe54L9J4'
  )

  expect(familyMembers).toEqual(
    new Set(['Loid Forger', 'Anya Forger', 'Yor Forger'])
  )
})
