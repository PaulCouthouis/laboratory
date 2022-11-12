import type { Cards } from '../../card/core/domain/cards'
import type { Component, JSXElement } from 'solid-js'

import { Pile } from '../core/domain/pile'
import { CardUI } from '../../card/ui'
import { PreviousButton } from '../../../design/buttons/previous'
import { NextButton } from '../../../design/buttons/next'
import { PileStore } from '../core/store'
import { CardPreview } from '../../card/ui/preview'
import { CardPreviews } from '../../card/ui/previews'

export const PileUI: Component<{ cards: Cards }> = (p) => {
  const pile = Pile(p.cards)
  const store = PileStore(pile)

  const { current, isFirst, isLast } = store.state

  return (
    <div class="flex">
      <div class="hidden lg:flex flex-wrap">
        <CardPreviews cards={p.cards} />
      </div>
      <div class="grid grid-cols-8">
        <NavBox>
          {!isFirst() && <PreviousButton onClick={store.actions.previous} />}
        </NavBox>
        <div class="col-span-6">
          <CardUI
            category={current().category}
            description={current().description}
            id={current().id}
            illustrator={current().illustrator}
            name={current().name}
            sentences={current().sentences}
            translation={current().translation}
            variant={current().variant}
          />
        </div>
        <NavBox>
          {!isLast() && <NextButton onClick={store.actions.next} />}
        </NavBox>
      </div>
    </div>
  )
}

const NavBox: Component<{ children: JSXElement }> = (p) => (
  <div class="flex justify-center items-center">{p.children}</div>
)

