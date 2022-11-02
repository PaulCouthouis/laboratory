import type { Component } from 'solid-js'
import type { Card } from '../../core/domain/card'

export const CardTranslation: Component<Pick<Card, 'translation'>> = ({
  translation,
}) => {
  return <p class="text-xl leading-none text-center">{translation}</p>
}
