import { test } from 'vitest'
import { createFakeCards } from './fake/cards'
import { RetrieveCardPileSteps } from './steps/retrieve-card-pile'

test('Retrieve card pile', () => {
  const fakeCards = createFakeCards(10)
  const expectedPile = [fakeCards[1], fakeCards[2], fakeCards[4], fakeCards[8]]
  const requestIds = expectedPile.map(({ id }) => id)

  const steps = RetrieveCardPileSteps()

  steps.givenCardCollection(fakeCards)

  steps.whenRetrievePile(requestIds)

  steps.thenRetrievedPileIs(expectedPile)
})
