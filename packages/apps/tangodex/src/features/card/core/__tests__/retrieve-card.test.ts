import { test } from 'vitest'
import { createFakeCards } from './fake/cards'
import { RetrieveCardSteps } from './steps/retrieve-card'

test('Retrieve card', () => {
  const fakeCards = createFakeCards(3)
  const steps = RetrieveCardSteps()

  steps.givenCardCollection(fakeCards)

  steps.whenRetrieveCard(fakeCards[1].id)

  steps.thenRetrievedCardIs(fakeCards[1])
})
