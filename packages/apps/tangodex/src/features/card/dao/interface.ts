import type { Either } from 'purify-ts'
import type { Observable } from 'rxjs'
import type { Card } from '../domain/card'

export interface CardDAO {
  getById: (id: Card['id']) => Observable<Either<string, Card>>
}
