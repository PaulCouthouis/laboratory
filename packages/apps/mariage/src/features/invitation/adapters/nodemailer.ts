import type { DeliveryService } from '../domain/output/service'
import { buildDeliveryService as buildNodeMailerDeliveryService } from 'mail/src/adapters/nodemailer'
import type { ReplyCard, ReplyCardMember } from '../domain/values'

interface NodeMailerDeliveryService extends DeliveryService {
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
) => NodeMailerDeliveryService = (options) => {
  const nodeMailDeliveryService = buildNodeMailerDeliveryService(options)

  const deliver = async (replyCard: ReplyCard) => {
    const memberSentence = ({ diet, name, status }: ReplyCardMember) =>
      `${name} est ${status}. Son régime alimentaire est ${diet || 'normal'} \n`

    return nodeMailDeliveryService.deliver({
      title: `Réponse de ${options.responsible}`,
      message: `
        ${replyCard.members.map(memberSentence).join('')}
        ${replyCard.message}  
      `,
    })
  }

  const isSuccess = () => nodeMailDeliveryService.isSuccess()

  return { deliver, isSuccess }
}
