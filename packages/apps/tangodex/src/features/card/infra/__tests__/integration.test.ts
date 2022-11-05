import { expect, test } from 'vitest'
import { CardDAO } from '../dao'
import { firstValueFrom } from 'rxjs'

test('Get One Card', async () => {
  const dao = CardDAO()

  const card$ = dao.getById('KDS-0001')
  const card = await firstValueFrom(card$)

  expect(card.extract()).toMatchSnapshot()
})

test('Get Card Pile', async () => {
  const dao = CardDAO()

  const cards$ = dao.getByIds(['KDS-0002', 'KDS-0003', 'KDS-0004'])
  const cards = await firstValueFrom(cards$)

  expect(cards.extract()).toMatchSnapshot()
})