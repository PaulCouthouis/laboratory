import type { Component } from 'solid-js'
import type { Card } from '../../domain/card'

export const CardDescription: Component<Pick<Card, 'description'>> = ({
  description,
}) => {
  return (
    <p class="bg-neutral border-y border-black border-opacity-40 w-full p-4 m-4 leading-10 whitespace-pre-wrap">
      {description}
    </p>
  )
}
