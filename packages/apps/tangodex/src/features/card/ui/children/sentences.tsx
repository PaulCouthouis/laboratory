import type { Component } from 'solid-js'
import { Index } from 'solid-js'

export const CardSentences: Component<{ sentences: string[] }> = ({
  sentences,
}) => {
  return (
    <div class="px-2 flex-1 flex flex-col justify-center items-center text-xs sm:text-base">
      <Index each={sentences}>
        {(sentence) => <p class="leading-8 sm:leading-[3rem]">{sentence}</p>}
      </Index>
    </div>
  )
}
