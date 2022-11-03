import { includeInIds } from './include'

const filter = <Item>(f: (item: Item) => boolean, items: Array<Item>) =>
  items.filter(f)

export const filterByIds = <Item, Id>(
  ids: Id[],
  items: Array<Item & { id: Id }>
) => filter(includeInIds(ids), items)
