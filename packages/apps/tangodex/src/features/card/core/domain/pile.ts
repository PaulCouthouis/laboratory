import { array, GetType } from 'purify-ts'
import { decodeTo } from '../../../../functions/codec'
import { Card } from './card'

export const Cards = array(Card)
export type Cards = GetType<typeof Cards>
export const decodeCards = decodeTo(Cards)

export const Pile = (cards: Cards, index = 0) => {
  const current = cards[index]
  const lastIndex = cards.length - 1

  const isFirst = 0 === index
  const isLast = lastIndex === index

  const next = () => Pile(cards, index + 1)
  const previous = () => Pile(cards, index - 1)

  return { current, isFirst, isLast, next, previous }
}
export type Pile = ReturnType<typeof Pile>