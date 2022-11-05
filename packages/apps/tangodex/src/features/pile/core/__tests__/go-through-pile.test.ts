import { describe, it } from 'vitest'
import { createFakeCards } from '../../../card/core/__tests__/fake/cards'
import { GoThroughPileSteps } from './steps/go-through-pile'

describe('Go Through Pile', () => {
  it('go to the last card', () => {
    const fakeCards = createFakeCards(3)
    const steps = GoThroughPileSteps()

    steps.givenPileDisplayingThisCardIndex(1, fakeCards)

    steps.whenGoToTheNextCard()

    steps.thenCurrentCardIs(fakeCards[2])
    steps.thenCurrentCardIsLast()
  })

  it('Go from the 3rd to the 2nd card', () => {
    const fakeCards = createFakeCards(3)
    const steps = GoThroughPileSteps()

    steps.givenPileDisplayingThisCardIndex(2, fakeCards)

    steps.whenGoToThePreviousCard()

    steps.thenCurrentCardIs(fakeCards[1])
    steps.thenCurrentCardIsNotFirst()
  })

  it('Go from the first to the 3rd card', () => {
    const fakeCards = createFakeCards(3)
    const steps = GoThroughPileSteps()

    steps.givenPileDisplayingThisCardIndex(0, fakeCards)

    steps.whenGoToTheSelectedCard(2)

    steps.thenCurrentCardIs(fakeCards[2])
  })
})
