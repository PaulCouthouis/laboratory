import { Mail } from '../entities'

export interface DeliveryService {
  deliver(mail: Mail): void
}
