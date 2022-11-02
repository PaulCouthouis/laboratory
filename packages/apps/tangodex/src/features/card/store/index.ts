import { Either, Left } from 'purify-ts'
import { BehaviorSubject } from 'rxjs'
import type { CardDAO } from '../dao'
import type { Card } from '../domain/card'

export const CardStore = (dao: CardDAO) => {
  const card$ = new BehaviorSubject<Either<string, Card>>(
    Left('Initialisation')
  )

  const retrieveCardById = (id: Card['id']) => {
    card$.next(Left('Loading'))
    dao.getById(id).subscribe((card) => {
      card$.next(card)
    })
  }

  return {
    actions: {
      retrieveCardById,
    },
    state: {
      card$,
    },
  }
}
