import type { Component } from 'solid-js'
import { Index } from 'solid-js'

export const CardSentences: Component<{ sentences: string[] }> = ({
  sentences,
}) => {
  return (
    <div class="flex-1 flex flex-col justify-center items-center">
      <Index each={sentences}>
        {(sentence) => <p class="leading-[3rem]">{sentence}</p>}
      </Index>
    </div>
  )
}
