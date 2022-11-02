import { CardDAO } from './dao'
import { CardStore } from './store'

const dao = CardDAO()
export const {
  state: { card$ },
  actions: { retrieveCardById },
} = CardStore(dao)
