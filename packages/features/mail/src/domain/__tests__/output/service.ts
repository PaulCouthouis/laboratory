export const buildFakeDeliveryService = () => {
  let sender: string
  let receivedMail: Record<'message' | 'title' | 'sender', string>

  const initSender = (initialSender: string) => {
    sender = initialSender
  }

  const deliver = async (mail: Record<'message' | 'title', string>) => {
    receivedMail = {
      sender,
      ...mail,
    }
    return Promise.resolve()
  }

  const getReceivedMail = () => receivedMail

  return { initSender, deliver, getReceivedMail }
}
