import type { Cards } from '../../../../card/core/domain/cards'
import type { Card } from '../../../../card/core/domain/card'
import { PileStore } from '../../store'

import { expect } from 'vitest'
import { Pile } from '../../domain/pile'

export const GoThroughPileSteps = () => {
  let store: PileStore

  const givenPile = (index: number, initialCards: Cards) => {
    store = PileStore(Pile(initialCards, index))
  }

  const whenGoToTheNextCard = () => {
    store.actions.next()
  }

  const whenGoToThePreviousCard = () => {
    store.actions.previous()
  }

  const whenGoToTheSelectedCard = (index: number) => {
    store.actions.goTo(index)
  }

  const thenCurrentCardIs = (expectedCard: Card) => {
    expect(store.state.current()).toEqual(expectedCard)
  }

  const thenCurrentCardIsLast = () => {
    expect(store.state.isLast()).toEqual(true)
  }

  const thenCurrentCardIsNotFirst = () => {
    expect(store.state.isFirst()).toEqual(false)
  }

  return {
    givenPileDisplayingThisCardIndex: givenPile,
    whenGoToTheNextCard,
    whenGoToThePreviousCard,
    whenGoToTheSelectedCard,
    thenCurrentCardIs,
    thenCurrentCardIsLast,
    thenCurrentCardIsNotFirst,
  }
}