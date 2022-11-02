import type { Component } from 'solid-js'
import type { Card } from '../../core/domain/card'

export const CardCategory: Component<Pick<Card, 'category'>> = ({
  category,
}) => {
  const label = CARD_CATEGORY_LABELS[category]

  return (
    <p class="bg-primary flex justify-center items-center rounded-2xl text-xs sm:text-sm text-white w-16">
      {label}
    </p>
  )
}

const CARD_CATEGORY_LABELS = {
  kandoushi: '感動詞',
}
