import type { Component } from 'solid-js'
import type { Card } from '../../core/domain/card'

export const CardName: Component<Pick<Card, 'name'>> = (p) => {
  return <h1 class="text-3xl sm:text-6xl font-bold p-2">{p.name}</h1>
}
