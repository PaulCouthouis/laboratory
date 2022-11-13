import { Just, Maybe, MaybeAsync, Nothing } from 'purify-ts'
import type { Cards } from '../../../card/core/domain/cards'
import { Pile } from '../../../pile/core/domain/pile'

export const Pack = (id: string, cards: Maybe<Cards> = Nothing) => {
  const pile = cards.isJust() ? Just(Pile(cards.extract())) : Nothing

  const open = async (loadCards: (packId: string) => MaybeAsync<Cards>) => {
    const cards = await loadCards(id)
    return Pack(id, cards)
  }

  return { open, pile }
}
export type Pack = ReturnType<typeof Pack>
