import type { Component } from 'solid-js'
import type { Card } from '../core/domain/card'
import { CardCategory } from './children/category'
import { CardId } from './children/id'
import { CardIllustration } from './children/illustation'
import { CardIllustrator } from './children/illustrator'
import { CardName } from './children/name'
import { CardTranslation } from './children/translation'

export const CardPreview: Component<
  Pick<Card, 'id' | 'category' | 'illustrator' | 'name' | 'translation'>
> = (p) => {
  return (
    <article class="bg-white rounded-2xl p-2 m-2 w-[180px] h-[250px]">
      <div class="border border-black border-opacity-40 rounded-2xl h-full flex flex-col justify-between">
        <header class="p-2 flex justify-between">
          <CardCategory category={p.category} />
          <CardIllustrator illustrator={p.illustrator} />
        </header>
        <div class="lg:py-2 flex-1 flex flex-col items-center justify-between">
          <aside class="w-2/3 h-2/3 flex justify-center items-center border border-black border-opacity-40 rounded-2xl bg-neutral">
            <CardIllustration
              name={p.name}
              src={`illustrations/for-cards/${p.id}.png`}
            />
          </aside>
          <h1 class="text-xl font-bold p-2">{p.name}</h1>
        </div>
      </div>
    </article>
  )
}
