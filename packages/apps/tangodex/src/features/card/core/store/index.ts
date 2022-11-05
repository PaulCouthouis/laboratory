import type { CardDAO } from '../../infra/dao'
import type { Card } from '../domain/card'
import type { Cards } from '../domain/cards'

import { Either, Left } from 'purify-ts'
import { BehaviorSubject } from 'rxjs'

export const CardStore = (dao: CardDAO) => {
  const card$ = new BehaviorSubject<Either<string, Card>>(
    Left('Initialisation')
  )

  const cards$ = new BehaviorSubject<Either<string, Cards>>(
    Left('Initialisation')
  )

  const retrieveCardById = (id: Card['id']) => {
    card$.next(Left('Loading'))
    dao.getById(id).subscribe((card) => {
      card$.next(card)
    })
  }

  const retrieveCardsByIds = (ids: Card['id'][]) => {
    card$.next(Left('Loading'))
    dao.getByIds(ids).subscribe((cards) => {
      cards$.next(cards)
    })
  }

  return {
    actions: {
      retrieveCardById,
      retrieveCardsByIds,
    },
    state: {
      card$,
      cards$,
    },
  }
}
