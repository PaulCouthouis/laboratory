import type { Cards } from '../../card/core/domain/cards'

import { createSignal, onMount } from 'solid-js'
import { cards$, retrieveCardsByIds } from '../../card'
import { PileUI } from '.'

export const PileLoader = () => {
  const [isLoading, setIsLoading] = createSignal(true)
  const [getCards, setCards] = createSignal<Cards>([])

  onMount(() => {
    retrieveCardsByIds(['KDS-0001', 'KDS-0002', 'KDS-0003'])
  })

  cards$.subscribe((response) => {
    if (response.isRight()) {
      setCards(response.extract())
      setIsLoading(false)
    }
  })

  return <p>{isLoading() ? 'Loading...' : <PileUI cards={getCards()} />}</p>
}
