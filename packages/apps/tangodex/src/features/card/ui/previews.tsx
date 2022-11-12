import { Component, For } from 'solid-js'
import type { Card } from '../core/domain/card'
import { CardPreview } from './preview'

export const CardPreviews: Component<{ cards: Card[] }> = (p) => {
  return (
    <For each={p.cards}>
      {(card) => (
        <CardPreview
          id={card.id}
          category={card.category}
          illustrator={card.illustrator}
          name={card.name}
          translation={card.translation}
        />
      )}
    </For>
  )
}
