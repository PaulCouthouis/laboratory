import type { Component } from 'solid-js'
import type { Card } from '../core/domain/card'

import { PlayIcon } from '../../../design/icons/play'
import { CardCategory } from './children/category'
import { CardDescription } from './children/description'
import { CardId } from './children/id'
import { CardIllustration } from './children/illustation'
import { CardIllustrator } from './children/illustrator'
import { CardName } from './children/name'
import { CardSentences } from './children/sentences'
import { CardTranslation } from './children/translation'
import { CardVariant } from './children/variant'

export const CardUI: Component<Card> = (p) => {
  return (
    <article class="bg-white rounded-2xl p-2 max-w-full max-h-full lg:h-[800px] lg:w-[600px]">
      <div class="border border-black border-opacity-40 rounded-2xl h-full flex flex-col justify-between">
        <header class="p-2 flex justify-between">
          <CardCategory category={p.category} />
          <CardIllustrator illustrator={p.illustrator} />
        </header>
        <div class="lg:py-2 flex-1 flex flex-col items-center">
          <aside class="w-2/3 h-2/5 flex justify-center items-center border border-black border-opacity-40 rounded-2xl bg-neutral">
            <CardIllustration
              name={p.name}
              src={`illustrations/for-cards/${p.id}.png`}
            />
          </aside>
          <CardName name={p.name} />
          <CardVariant variant={p.variant} />
          <CardDescription description={p.description} />
          <CardSentences sentences={p.sentences} />
        </div>
        <footer class="p-2 grid grid-cols-3 items-end">
          <CardId id={p.id} />
          <CardTranslation translation={p.translation} />
        </footer>
      </div>
      <div class="relative">
        <div class="absolute bottom-0.5 right-0 px-1 text-4xl  text-primary">
          <PlayIcon />
        </div>
      </div>
    </article>
  )
}
