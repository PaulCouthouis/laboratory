import type { Component } from 'solid-js'
import type { Card } from '../../core/domain/card'

export const CardId: Component<Pick<Card, 'id'>> = ({ id }) => {
  return <p class="text-xs leading-none">{id}</p>
}
