import type { Component } from 'solid-js'

export const CardIllustrator: Component<{ illustrator: string }> = ({
  illustrator,
}) => {
  return (
    <p class="text-xxs text-center">
      Illustration by <br />
      {illustrator}
    </p>
  )
}
