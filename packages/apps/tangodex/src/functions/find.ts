import { compareId } from './compare'

const find = <Item>(f: (item: Item) => boolean, items: Array<Item>) =>
  items.find(f)

export const findById = <Item, Id>(id: Id, items: Array<Item & { id: Id }>) =>
  find(compareId(id), items)
