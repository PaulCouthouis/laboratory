import type { Cards } from '../../../../card/core/domain/cards'
import type { Card } from '../../../../card/core/domain/card'

import { expect } from 'vitest'
import { Pile } from '../../domain/pile'
import { createSignal, Signal } from 'solid-js'
import { PileSignal } from '../../signal'

export const GoThroughPileSteps = () => {
  const [getPile, setPile] = createSignal<Pile>(Pile([]))
  const { next, previous, goTo, current, isFirst, isLast } = PileSignal([
    getPile,
    setPile,
  ])

  const givenPile = (index: number, initialCards: Cards) => {
    setPile(Pile(initialCards, index))
  }

  const whenGoToTheNextCard = () => {
    next()
  }

  const whenGoToThePreviousCard = () => {
    previous()
  }

  const whenGoToTheSelectedCard = (index: number) => {
    goTo(index)
  }

  const thenCurrentCardIs = (expectedCard: Card) => {
    expect(current()).toEqual(expectedCard)
  }

  const thenCurrentCardIsLast = () => {
    expect(isLast()).toEqual(true)
  }

  const thenCurrentCardIsNotFirst = () => {
    expect(isFirst()).toEqual(false)
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