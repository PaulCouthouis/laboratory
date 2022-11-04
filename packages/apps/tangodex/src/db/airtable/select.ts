import type { FieldSet, Table } from 'airtable'
import type { QueryParams } from 'airtable/lib/query_params'
import { curry } from 'purify-ts'
import { WordCardsBase } from './bases'
import { byId, byIds } from './formula'

const selectByQueryParams = (
  table: Table<FieldSet>,
  params: QueryParams<FieldSet>
) => table.select(params)

const selectById = (table: Table<FieldSet>, id: string) =>
  selectByQueryParams(table, byId(id))

const selectByIds = (table: Table<FieldSet>, ids: string[]) =>
  selectByQueryParams(table, byIds(ids))

export const selectWordCardById = curry(selectById)(WordCardsBase)
export const selectWordCardByIds = curry(selectByIds)(WordCardsBase)
