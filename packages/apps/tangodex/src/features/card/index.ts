import { CardDAO } from './infra/dao'
import { CardStore } from './core/store'

const dao = CardDAO()
export const {
  state: { card$, cards$ },
  actions: { retrieveCardById, retrieveCardsByIds },
} = CardStore(dao)
