import Airtable, { FieldSet, Query, Records, Table } from 'airtable'
import type { QueryParams } from 'airtable/lib/query_params'
import { curry } from 'purify-ts'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
})

const base = Airtable.base(import.meta.env.VITE_AIRTABLE_BASE_ID)
const WordCardsBase = base('Word Cards')

const byId = (id: string) => ({
  filterByFormula: `{id}="${id}"`,
})

const selectByQueryParams = (
  table: Table<FieldSet>,
  params: QueryParams<FieldSet>
) => table.select(params)

const selectById = (table: Table<FieldSet>, id: string) =>
  selectByQueryParams(table, byId(id))

const selectWordCardById = curry(selectById)(WordCardsBase)

const retrieveRecords = (query: Query<FieldSet>) => query.all()

export const retrieveRecordsFromWordCardById = (id: string) =>
  retrieveRecords(selectWordCardById(id))

export const toFirstFieldSet = (records: Records<FieldSet>) => records[0].fields
