import type { Component } from 'solid-js'
import type { Card } from '../../domain/card'

type Props = Pick<Card, 'name'> & {
  src: string
}
export const CardIllustration: Component<Props> = ({ name, src }) => {
  const alt = `Illustration de la carte ${name}`

  return <img class="max-w-full max-h-full" src={src} alt={alt} />
}
