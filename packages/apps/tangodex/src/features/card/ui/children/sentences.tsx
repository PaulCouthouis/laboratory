import type { Component } from 'solid-js'

export const CardSentences: Component<{ sentences: string }> = (p) => {
  return (
    <p class="w-full p-4 whitespace-pre-wrap text-xs sm:text-base">
      {p.sentences}
    </p>
  )
}
