import type { Component } from 'solid-js'
import type { Card } from '../../domain/card'

export const CardVariant: Component<Pick<Card, 'variant'>> = ({ variant }) => {
  return variant.isJust() && <p class="sm:text-xl">{variant.extract()}</p>
}
