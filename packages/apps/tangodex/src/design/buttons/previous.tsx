import type { Component } from 'solid-js'
import { PreviousIcon } from '../icons/previous'

export const PreviousButton: Component<{
  onClick: () => void
}> = ({ onClick }) => {
  return (
    <button class="text-primary text-4xl" onClick={onClick}>
      <PreviousIcon />
    </button>
  )
}
