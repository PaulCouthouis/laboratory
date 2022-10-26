import { array, Codec, exactly, GetType, maybe, string } from 'purify-ts'

export const Card = Codec.interface({
  category: exactly('kandoushi'),
  description: string,
  id: string,
  illustrator: string,
  name: string,
  sentences: array(string),
  translation: string,
  variant: maybe(string),
})
export type Card = GetType<typeof Card>
