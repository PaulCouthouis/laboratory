import type { Card } from '../../domain/card'

import { expect } from 'vitest'
import { CardStore } from '../../store'
import { FakeCardDAO } from '../fake/dao'

export const RetrieveCardSteps = () => {
  const fakeCardDAO = FakeCardDAO()
  const { actions, state } = CardStore(fakeCardDAO)

  const givenCardCollection = (initialCards: Card[]) => {
    fakeCardDAO.init(initialCards)
  }

  const whenRetrieveCard = (cardId: Card['id']) => {
    actions.retrieveCardById(cardId)
  }

  const thenRetrievedCardIs = (expectedCard: Card) => {
    const receivedCard = state.card$.value.extract()
    expect(receivedCard).toEqual(expectedCard)
  }

  return { givenCardCollection, whenRetrieveCard, thenRetrievedCardIs }
}
