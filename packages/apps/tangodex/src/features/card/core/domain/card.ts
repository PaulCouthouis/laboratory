import { array, Codec, curry, exactly, GetType, maybe, string } from 'purify-ts'
import { decode } from '../../../../functions/codec'

export const Card = Codec.interface({
  category: exactly('kandoushi'),
  description: string,
  id: string,
  illustrator: string,
  name: string,
  sentences: string,
  translation: string,
  variant: maybe(string),
})
export type Card = GetType<typeof Card>

export const decodeCard = curry(decode<Card>)(Card)
