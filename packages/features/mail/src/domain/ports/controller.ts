import { Send } from '../interactor'
import { DeliveryService } from './service'

export const buildSend: (deliveryService: DeliveryService) => Send =
  (deliveryService) => (mail) => {
    return deliveryService.deliver(mail)
  }
