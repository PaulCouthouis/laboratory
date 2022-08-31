import type { ReplyToInvitation } from '../interactor'
import type { DeliveryService } from '../output/service'

export const buildReplyToInvitation: (
  deliveryService: DeliveryService
) => ReplyToInvitation = (deliveryService) => {
  return (replyCard) => {
    return deliveryService.deliver(replyCard)
  }
}
