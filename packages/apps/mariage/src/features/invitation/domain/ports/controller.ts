import type { ReplyToInvitation } from '../interactor'
import type { DeliveryService } from './service'

export const buildReplyToInvitation: (
  deliveryService: DeliveryService
) => ReplyToInvitation = (deliveryService) => {
  return (replyCard) => deliveryService.deliver(replyCard)
}
