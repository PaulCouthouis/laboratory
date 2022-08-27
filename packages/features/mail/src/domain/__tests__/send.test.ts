import { test } from 'vitest'
import { buildSteps } from './steps/send'

test('Send a mail', () => {
  const steps = buildSteps()

  steps.givenSender('sender@test.com')

  steps.whenHeSendsMail({
    message: 'This is the body of mail',
    title: 'This is the title of mail',
  })

  steps.thenRecipientReceivesMail({
    message: 'This is the body of mail',
    sender: 'sender@test.com',
    title: 'This is the title of mail',
  })
})
