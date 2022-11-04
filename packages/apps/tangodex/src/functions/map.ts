import type { Codec } from 'purify-ts'

export const map = <Item, NewItem>(f: (item: Item) => NewItem, items: Item[]) =>
  items.map(f)

export const mapToCodec = <Item>(codec: Codec<Item>, items: Item[]) =>
  map(codec.encode, items)
