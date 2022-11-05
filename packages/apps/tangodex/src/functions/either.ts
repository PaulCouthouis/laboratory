import type { Either } from 'purify-ts'

export const mapEither = <L, R, R2>(
  f: (value: R) => R2,
  either: Either<L, R>
) => either.map(f)
