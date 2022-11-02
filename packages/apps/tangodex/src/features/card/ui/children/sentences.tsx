import type { Component } from 'solid-js'
import { Index } from 'solid-js'

export const CardSentences: Component<{ sentences: string }> = ({
  sentences,
}) => {
  return (
    <p class="w-full p-4 whitespace-pre-wrap text-xs sm:text-base">
      {sentences}
    </p>
  )
}
