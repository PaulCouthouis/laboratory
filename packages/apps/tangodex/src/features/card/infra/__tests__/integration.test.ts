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

  const pile$ = dao.getByIds(['KDS-0002', 'KDS-0003', 'KDS-0004'])
  const pile = await firstValueFrom(pile$)

  expect(pile.extract()).toMatchSnapshot()
})