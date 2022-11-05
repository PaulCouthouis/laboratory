import { curry } from 'purify-ts'
import { AsyncSubject, map } from 'rxjs'
import { filterByIds } from '../../../../../functions/filter'
import { findById } from '../../../../../functions/find'
import { mapToCodec } from '../../../../../functions/map'
import { Card, decodeCard } from '../../domain/card'
import { decodeCards } from '../../domain/cards'

export const FakeCardDAO = () => {
  const cardsSubject = new AsyncSubject<Card[]>()

  const init = (initialCards: Card[]) => {
    cardsSubject.next(mapToCodec(Card, initialCards))
    cardsSubject.complete()
  }

  const getById = (id: Card['id']) => {
    return cardsSubject.pipe(map(findInCollectionById(id)), map(decodeCard))
  }

  const getByIds = (ids: Card['id'][]) => {
    return cardsSubject.pipe(
      map(filterInCollectionByIds(ids)),
      map(decodeCards)
    )
  }

  return { getById, getByIds, init }
}

const findInCollectionById = (id: Card['id']) =>
  curry(findById<Card, Card['id']>)(id)

const filterInCollectionByIds = (ids: Card['id'][]) =>
  curry(filterByIds<Card, Card['id']>)(ids)
