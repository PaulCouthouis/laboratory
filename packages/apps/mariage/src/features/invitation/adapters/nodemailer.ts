import type { DeliveryService } from '../domain/output/service'
import type { ReplyCard, ReplyCardMember } from '../domain/values'
import { createTransport } from 'nodemailer'
import type * as SMTPTransport from 'nodemailer/lib/smtp-transport'

export interface NodeMailerDeliveryService extends DeliveryService {
  isSuccess(): boolean
}

type NodeMailerDeliveryServiceOptions<T> = T & {
  auth: {
    user: string
    pass: string
  }
  responsible: string
}

export const buildDeliveryService: <T>(
  options: NodeMailerDeliveryServiceOptions<T>
) => NodeMailerDeliveryService = ({ responsible, ...options }) => {
  const transporter = createTransport(options)
  let sendedMail: SMTPTransport.SentMessageInfo

  const deliver = async (replyCard: ReplyCard) => {
    const memberSentence = ({ diet, name, status }: ReplyCardMember) =>
      `${name} est ${status}. Son régime alimentaire est ${diet || 'normal'} \n`

    const mailOption = {
      from: options.auth.user,
      to: 'moepaul812@gmail.com',
      subject: `Réponse de ${responsible}`,
      text: `
        ${replyCard.members.map(memberSentence).join('')}
        ${replyCard.message}  
      `,
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
