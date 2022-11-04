import type { FieldSet, Query, Record, Records } from 'airtable'
import { map } from '../../functions/map'
import { selectWordCardById, selectWordCardByIds } from './select'

const retrieveRecords = (query: Query<FieldSet>) => query.all()

export const retrieveRecordsFromWordCardById = (id: string) =>
  retrieveRecords(selectWordCardById(id))

export const retrieveRecordsFromWordCardByIds = (ids: string[]) =>
  retrieveRecords(selectWordCardByIds(ids))

export const toFieldSet = (record: Record<FieldSet>) => record.fields
export const toFirstFieldSet = (records: Records<FieldSet>) =>
  toFieldSet(records[0])

export const ToFieldSetList = (records: Records<FieldSet>) =>
  records.map(toFieldSet)
