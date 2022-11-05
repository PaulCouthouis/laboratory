import type { Card } from '../../domain/card'

import { expect } from 'vitest'
import { Cards, Pile } from '../../domain/pile'

export const GoThroughPileSteps = () => {
  let pile: Pile

  const givenPile = (index: number, initialCards: Cards) => {
    pile = Pile(initialCards, index)
  }

  const whenGoToTheNextCard = () => {
    pile = pile.next()
  }

  const whenGoToThePreviousCard = () => {
    pile = pile.previous()
  }

  const thenCurrentCardIs = (expectedCard: Card) => {
    expect(pile.current).toEqual(expectedCard)
  }

  const thenCurrentCardIsLast = () => {
    expect(pile.isLast).toEqual(true)
  }

  const thenCurrentCardIsNotFirst = () => {
    expect(pile.isFirst).toEqual(false)
  }

  return {
    givenPileDisplayingThisCardIndex: givenPile,
    whenGoToTheNextCard,
    whenGoToThePreviousCard,
    thenCurrentCardIs,
    thenCurrentCardIsLast,
    thenCurrentCardIsNotFirst,
  }
}
