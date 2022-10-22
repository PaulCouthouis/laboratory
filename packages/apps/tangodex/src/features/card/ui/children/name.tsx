import type { Component } from 'solid-js'
import type { Card } from '../../domain/card'

export const CardName: Component<Pick<Card, 'name'>> = ({ name }) => {
  return <h1 class="text-6xl font-bold p-2">{name}</h1>
}
