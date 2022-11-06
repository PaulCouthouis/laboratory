import type { Cards } from '../../card/core/domain/cards'

import { Component, createSignal } from 'solid-js'
import { Pile } from '../core/domain/pile'
import { PileSignal } from '../core/signal'
import { CardUI } from '../../card/ui'
import { PreviousButton } from '../../../design/buttons/previous'
import { NextButton } from '../../../design/buttons/next'

export const PileUI: Component<{ cards: Cards }> = ({ cards }) => {
  const signal = createSignal(Pile(cards))
  const { next, previous, goTo, current, isFirst, isLast } = PileSignal(signal)

  const currentCard = current()

  return (
    <div class="grid grid-cols-8">
      <PreviousButton onClick={previous} />
      <div class="col-span-6">
        <CardUI {...currentCard} />
      </div>
      <NextButton onClick={next} />
    </div>
  )
}
