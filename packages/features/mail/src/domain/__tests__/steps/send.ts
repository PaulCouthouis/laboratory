import { expect } from 'vitest'
import { buildSend } from '../../ports/controller'
import { buildFakeDeliveryService } from '../output/service'

export const buildSteps = () => {
  const fakeDeliveryService = buildFakeDeliveryService()
  const send = buildSend(fakeDeliveryService)

  const givenSender = (initialSender: string) => {
    fakeDeliveryService.initSender(initialSender)
  }

  const whenHeSendsMail = (mail: Record<'message' | 'title', string>) => {
    send(mail)
  }

  const thenRecipientReceivesMail = (
    expetedMail: Record<'message' | 'title' | 'sender', string>
  ) => {
    const receivedMail = fakeDeliveryService.getReceivedMail()
    expect(receivedMail).toEqual(expetedMail)
  }

  return { givenSender, whenHeSendsMail, thenRecipientReceivesMail }
}
