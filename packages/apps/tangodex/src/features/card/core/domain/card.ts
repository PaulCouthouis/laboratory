import { Codec, exactly, GetType, maybe, string } from 'purify-ts'
import { decodeTo } from '../../../../functions/codec'

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
export const decodeCard = decodeTo(Card)
