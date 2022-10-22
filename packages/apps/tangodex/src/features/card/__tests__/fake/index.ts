/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { faker } from '@faker-js/faker'
import { Maybe } from 'purify-ts'
import type { Card } from '../../domain/card'

const createFakeCard = () =>
  ({
    category: 'kandoushi',
    description: faker.lorem.sentences(3),
    id: faker.datatype.uuid(),
    illustrator: faker.name.fullName(),
    name: faker.word.interjection(),
    sentences: [
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
    ],
    translation: faker.word.interjection(),
    variant: Maybe.fromNullable(
      faker.helpers.maybe(() => faker.word.interjection())
    ),
  } as Card)

export const createFakeCards = () => {
  return [createFakeCard(), createFakeCard(), createFakeCard()]
}
