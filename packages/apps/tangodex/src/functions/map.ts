import type { Codec } from 'purify-ts'
import { encodeTo } from './codec'

const mapInArray = <Item>(f: (item: Item) => Item, items: Item[]) =>
  items.map(f)

export const mapToCodec = <Item>(codec: Codec<Item>, items: Item[]) =>
  mapInArray(encodeTo(codec), items)
