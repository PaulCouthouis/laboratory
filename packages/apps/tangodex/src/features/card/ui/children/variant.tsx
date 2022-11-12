import type { Component } from 'solid-js'
import type { Card } from '../../core/domain/card'

export const CardVariant: Component<Pick<Card, 'variant'>> = (p) => {
  return (
    p.variant.isJust() && (
      <p class="text-xs sm:text-xl">{p.variant.extract()}</p>
    )
  )
}
