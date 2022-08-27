import { Send } from '../interactor'
import { DeliveryService } from './service'

export const buildSend: (deliveryService: DeliveryService) => Send =
  (deliveryService) => (mail) => {
    deliveryService.deliver(mail)
  }
