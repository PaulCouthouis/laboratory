import { expect, test } from 'vitest'
import { CardDAO } from '..'
import { firstValueFrom } from 'rxjs'

test('Get One Card', async () => {
  const dao = CardDAO()

  const card$ = dao.getById('KDS-0001')
  const card = await firstValueFrom(card$)

  expect(card.extract()).toMatchSnapshot()
})
