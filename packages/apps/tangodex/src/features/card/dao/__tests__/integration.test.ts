import type { Card } from '../../domain/card'

import { test } from 'vitest'
import { AirtableBase } from '../../../../db/airtable'

test('Get One Card', async () => {
  const dao = CardDAO()

  const card = await dao.getById('KDS-0001')

  console.log(card)
})

const CardDAO = () => {
  const getById = async (id: Card['id']) => {
    console.log(`{Id}=${id}`)

    const base = AirtableBase()
    const record = await base('Cards')
      .select({
        filterByFormula: `{Id}="${id}"`,
      })
      .all()

    return record
  }

  return { getById }
}
