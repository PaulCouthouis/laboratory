import type { Component } from 'solid-js'
import type { Card } from '../../core/domain/card'

type Props = Pick<Card, 'name'> & {
  src: string
}
export const CardIllustration: Component<Props> = (p) => {
  const alt = `Illustration de la carte ${p.name}`

  return <img class="max-w-full max-h-full" src={p.src} alt={alt} />
}
