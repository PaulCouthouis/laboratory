import { compareId } from './compare'

const findInArray = <Item>(f: (item: Item) => boolean, items: Array<Item>) =>
  items.find(f)

export const findInArrayById = <Item, SearchId>(
  items: Array<Item & { id: SearchId }>,
  searchId: SearchId
) => findInArray(compareId(searchId), items)
