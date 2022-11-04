import type { Either } from 'purify-ts'

import { from, map, Observable, take } from 'rxjs'
import {
  ToFieldSetList,
  retrieveRecordsFromWordCardById,
  retrieveRecordsFromWordCardByIds,
  toFirstFieldSet,
} from '../../../db/airtable/retrieve'
import { Card, decodeCard } from '../core/domain/card'
import { decodePile, Pile } from '../core/domain/pile'

export interface CardDAO {
  getById: (id: Card['id']) => Observable<Either<string, Card>>
  getByIds: (ids: Card['id'][]) => Observable<Either<string, Pile>>
}

export const CardDAO: () => CardDAO = () => {
  const getById = (id: Card['id']) => {
    const records = retrieveRecordsFromWordCardById(id)

    return from(records).pipe(map(toFirstFieldSet), map(decodeCard), take(1))
  }

  const getByIds = (ids: Card['id'][]) => {
    const records = retrieveRecordsFromWordCardByIds(ids)

    return from(records).pipe(map(ToFieldSetList), map(decodePile), take(1))
  }

  return { getById, getByIds }
}
