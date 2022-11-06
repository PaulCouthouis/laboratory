import type { Component } from 'solid-js'
import { NextIcon } from '../icons/next'

export const NextButton: Component<{
  onClick: () => void
}> = ({ onClick }) => {
  return (
    <button class="text-primary text-4xl" onClick={onClick}>
      <NextIcon />
    </button>
  )
}
