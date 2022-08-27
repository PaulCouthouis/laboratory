export const buildFakeDeliveryService = () => {
  let sender: string
  let receivedMail: Record<'message' | 'title' | 'sender', string>

  const initSender = (initialSender: string) => {
    sender = initialSender
  }

  const deliver = (mail: Record<'message' | 'title', string>) => {
    receivedMail = {
      sender,
      ...mail,
    }
  }

  const getReceivedMail = () => receivedMail

  return { initSender, deliver, getReceivedMail }
}
