import type { MaybeAsync } from 'purify-ts'
import { createStore } from 'solid-js/store'
import type { Cards } from '../../../card/core/domain/cards'
import { Pack } from '../domain/pack'

export const PackStore = (loadCardsByPackId: LoadCardsByPackId) => {
  const from = (packId: string) => {
    const [packState, setPackState] = createStore(Pack(packId))

    const open = async () => {
      const newPackState = await packState.open(loadCardsByPackId)
      setPackState(newPackState)
    }

    return {
      state: {
        get pile() {
          return packState.pile
        },
      },
      actions: {
        open,
      },
    }
  }
  return { from }
}
export type PackStore = ReturnType<ReturnType<typeof PackStore>['from']>

type LoadCardsByPackId = (packId: string) => MaybeAsync<Cards>
