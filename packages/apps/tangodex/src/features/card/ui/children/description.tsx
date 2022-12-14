import type { Component } from 'solid-js'
import type { Card } from '../../core/domain/card'

export const CardDescription: Component<Pick<Card, 'description'>> = (p) => {
  return (
  <p class="bg-neutral border-y border-black border-opacity-40 w-full p-4 m-4 whitespace-pre-wrap text-xs leading-5 sm:text-base sm:leading-10">
    {p.description}
  </p>
)
}
