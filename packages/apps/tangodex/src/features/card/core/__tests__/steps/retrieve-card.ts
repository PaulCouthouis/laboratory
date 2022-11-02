import { curry } from 'purify-ts'
import { AsyncSubject, map } from 'rxjs'
import { expect } from 'vitest'
import { decodeOneEntityById } from '../../../../../functions/codec'
import { mapToCodec } from '../../../../../functions/map'
import { Card } from '../../domain/card'
import { CardStore } from '../../store'

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

const FakeCardDAO = () => {
  const cardsSubject = new AsyncSubject<Card[]>()

  const init = (initialCards: Card[]) => {
    cardsSubject.next(mapToCodec(Card, initialCards))
    cardsSubject.complete()
  }

  const getById = (id: Card['id']) => {
    return cardsSubject.pipe(map(decodeOneCardById(id)))
  }

  return { getById, init }
}

const decodeOneCardById = curry(decodeOneEntityById<Card>)(Card)
