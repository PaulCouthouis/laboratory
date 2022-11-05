import type { Cards } from '../../card/core/domain/cards'

import { Component, createSignal } from 'solid-js'
import { Pile } from '../core/domain/pile'
import { PileSignal } from '../core/signal'
import { CardUI } from '../../card/ui'

export const PileUI: Component<{ cards: Cards }> = ({ cards }) => {
  const signal = createSignal(Pile(cards))
  const { next, previous, goTo, current, isFirst, isLast } = PileSignal(signal)

  const currentCard = current()

  return <CardUI {...currentCard} />
}
