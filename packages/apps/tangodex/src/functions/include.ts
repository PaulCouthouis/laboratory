const includes = <Item>(item: Item, items: Array<Item>) => items.includes(item)

export const includeInIds = <Id>(ids: Id[]) => {
  return ({ id }: { id: Id }) => includes<Id>(id, ids)
}
