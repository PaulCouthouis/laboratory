import { createTransport } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { Mail } from '../domain/entities'
import { DeliveryService } from '../domain/ports/service'

interface NodeMailerDeliveryService extends DeliveryService {
  isSuccess(): boolean
}

type NodeMailerDeliveryServiceOptions<T> = T & {
  auth: {
    user: string
    pass: string
  }
}

export const buildDeliveryService: <T>(
  options: NodeMailerDeliveryServiceOptions<T>
) => NodeMailerDeliveryService = (options) => {
  const transporter = createTransport(options)
  let sendedMail: SMTPTransport.SentMessageInfo

  const deliver = async ({ title, message }: Mail) => {
    const mailOption = {
      from: options.auth.user,
      to: options.auth.user,
      subject: title,
      text: message,
    }

    sendedMail = await transporter.sendMail(mailOption)
  }

  const isSuccess = () => {
    const { accepted, rejected } = sendedMail

    const hasAcceptedSend = accepted.length > 0
    const hasNotRejectedMail = rejected.length === 0

    return hasAcceptedSend && hasNotRejectedMail
  }

  return { deliver, isSuccess }
}
