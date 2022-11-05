import type { Cards } from '../../../../card/core/domain/cards'
import type { Card } from '../../../../card/core/domain/card'

import { expect } from 'vitest'
import { Pile } from '../../../../pile/core/pile'

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

  const whenGoToTheSelectedCard = (index: number) => {
    pile = pile.goTo(index)
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
    whenGoToTheSelectedCard,
    thenCurrentCardIs,
    thenCurrentCardIsLast,
    thenCurrentCardIsNotFirst,
  }
}
