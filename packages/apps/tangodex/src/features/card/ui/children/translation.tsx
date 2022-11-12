import type { Component } from 'solid-js'
import type { Card } from '../../core/domain/card'

export const CardTranslation: Component<Pick<Card, 'translation'>> = (p) => {
  return <p class="text-xl leading-none text-center">{p.translation}</p>
}
