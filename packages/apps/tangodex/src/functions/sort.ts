export const sort = <Item>(
  f: (item1: Item, item2: Item) => number,
  items: Item[]
) => items.sort(f)

export const sortById = <Item>(items: Array<Item & { id: string }>) =>
  sort((a, b) => a.id.localeCompare(b.id), items)
