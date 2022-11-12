import type { Component } from 'solid-js'

export const CardIllustrator: Component<{ illustrator: string }> = (p) => {
  return (
    <p class="text-xxs text-center">
      Illustration by <br />
      {p.illustrator}
    </p>
  )
}
