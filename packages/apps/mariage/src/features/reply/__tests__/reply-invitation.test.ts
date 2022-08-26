import { test } from 'vitest'
import { buildSteps } from './steps'

test('Reply invitation', () => {
  const steps = buildSteps()

  steps.givenInvitationCard({
    invitationCardId: 'card-999',
    members: new Set(['Loid Forger', 'Yor Forger', 'Anya Forger']),
  })

  steps.whenRepresentativeReplyToInvitation({
    members: [
      {
        diet: 'no pork',
        name: 'Loid Forger',
        status: 'accept',
      },
      {
        name: 'Yor Forger',
        status: 'decline',
      },
      {
        diet: 'children menu',
        name: 'Anya Forger',
        status: 'wait',
      },
    ],
    message: 'Thanks for the invitation ! I am so excited :D',
  })

  steps.thenOrganizerReceivesTheReply({
    invitationCardId: 'card-999',
    members: [
      {
        diet: 'no pork',
        name: 'Loid Forger',
        status: 'accept',
      },
      {
        name: 'Yor Forger',
        status: 'decline',
      },
      {
        diet: 'children menu',
        name: 'Anya Forger',
        status: 'wait',
      },
    ],
    message: 'Thanks for the invitation ! I am so excited :D',
  })
})
