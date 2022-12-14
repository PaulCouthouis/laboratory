import { curry, Either } from 'purify-ts'

import { from, map, Observable, take } from 'rxjs'
import {
  ToFieldSetList,
  retrieveRecordsFromWordCardById,
  retrieveRecordsFromWordCardByIds,
  toFirstFieldSet,
} from '../../../db/airtable/retrieve'
import { mapEither } from '../../../functions/either'
import { sortById } from '../../../functions/sort'
import { Card, decodeCard } from '../core/domain/card'
import { decodeCards, Cards } from '../core/domain/cards'

export interface CardDAO {
  getById: (id: Card['id']) => Observable<Either<string, Card>>
  getByIds: (ids: Card['id'][]) => Observable<Either<string, Cards>>
}

export const CardDAO: () => CardDAO = () => {
  const getById = (id: Card['id']) => {
    const records = retrieveRecordsFromWordCardById(id)

    return from(records).pipe(map(toFirstFieldSet), map(decodeCard), take(1))
  }

  const getByIds = (ids: Card['id'][]) => {
    const records = retrieveRecordsFromWordCardByIds(ids)

    return from(records).pipe(
      map(ToFieldSetList),
      map(decodeCards),
      map(sortCardsById),
      take(1)
    )
  }

  return { getById, getByIds }
}

export const sortCardsById = curry(mapEither<string, Cards, Cards>)(sortById)
