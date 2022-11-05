import type { Card } from '../../domain/card'

import { expect } from 'vitest'
import { FakeCardDAO } from '../fake/dao'
import { CardStore } from '../../store'

export const RetrieveCardPileSteps = () => {
  const fakeCardDAO = FakeCardDAO()
  const { actions, state } = CardStore(fakeCardDAO)

  const givenCardCollection = (initialCards: Card[]) => {
    fakeCardDAO.init(initialCards)
  }

  const whenRetrievePile = (ids: Card['id'][]) => {
    actions.retrieveCardsByIds(ids)
  }

  const thenRetrievedPileIs = (expectedFakeCards: Card[]) => {
    const receivedCard = state.cards$.value.extract()
    expect(receivedCard).toEqual(expectedFakeCards)
  }

  return {
    givenCardCollection,
    whenRetrievePile,
    thenRetrievedPileIs: thenRetrievedPileIs,
  }
}
