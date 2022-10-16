import { Codec, exactly, GetType, maybe, string } from 'purify-ts'

export const Card = Codec.interface({
  category: exactly('hiragana'),
  description: string,
  formal: maybe(string),
  id: string,
  name: string,
  translation: string,
})
export type Card = GetType<typeof Card>
