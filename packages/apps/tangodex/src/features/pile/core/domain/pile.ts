import type { Cards } from '../../../card/core/domain/cards'

export const Pile = (cards: Cards, index = 0) => {
  const current = cards[index]
  const lastIndex = cards.length - 1

  const isFirst = 0 === index
  const isLast = lastIndex === index

  const goTo = (index: number) => Pile(cards, index)
  const next = () => Pile(cards, index + 1)
  const previous = () => Pile(cards, index - 1)

  const toStringify = () => JSON.stringify(Pile(cards, index))

  return { current, isFirst, isLast, goTo, next, previous, toStringify }
}
export type Pile = ReturnType<typeof Pile>
