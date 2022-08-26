import type { ReplyCard } from '../values'

export interface DeliveryService {
  deliver: (replyCard: ReplyCard) => void
}
