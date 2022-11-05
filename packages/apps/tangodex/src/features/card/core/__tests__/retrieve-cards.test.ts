import { test } from 'vitest'
import { createFakeCards } from './fake/cards'
import { RetrieveCards } from './steps/retrieve-cards'

test('Retrieve cards', () => {
  const fakeCards = createFakeCards(10)
  const expectedPile = [fakeCards[1], fakeCards[2], fakeCards[4], fakeCards[8]]
  const requestIds = expectedPile.map(({ id }) => id)

  const steps = RetrieveCards()

  steps.givenCardCollection(fakeCards)

  steps.whenRetrieveCardsByIds(requestIds)

  steps.thenRetrievedCardsIs(expectedPile)
})
