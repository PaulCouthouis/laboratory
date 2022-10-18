import { test } from 'vitest'
import { createFakeCards } from './fake'
import { RetrieveCardSteps } from './steps/retrieve-card'

test('Retrieve card', () => {
  const fakeCards = createFakeCards()
  const steps = RetrieveCardSteps()

  steps.givenCardCollection(fakeCards)

  steps.whenRetrieveCard(fakeCards[1].id)

  steps.thenRetrievedCardIs(fakeCards[1])
})
