import type { Either } from 'purify-ts'

import { from, map, Observable, take } from 'rxjs'
import {
  retrieveRecordsFromWordCardById,
  toFirstFieldSet,
} from '../../../db/airtable'
import { Card, decodeCard } from '../core/domain/card'

export interface CardDAO {
  getById: (id: Card['id']) => Observable<Either<string, Card>>
}

export const CardDAO: () => CardDAO = () => {
  const getById = (id: Card['id']) => {
    const records = retrieveRecordsFromWordCardById(id)

    return from(records).pipe(map(toFirstFieldSet), map(decodeCard), take(1))
  }

  return { getById }
}
