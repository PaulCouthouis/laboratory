import { Just } from 'purify-ts'
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
import src from './KDS-0001.png'

export const CardUI = () => {
  return (
    <article class="bg-white rounded-2xl p-2 w-[600px] h-[800px]">
      <div class="border border-black border-opacity-40 rounded-2xl h-full flex flex-col justify-between">
        <header class="p-2 flex justify-between">
          <CardCategory category="kandoushi" />
          <CardIllustrator illustrator="stampo.fun" />
        </header>
        <div class="py-2 flex-1 flex flex-col items-center">
          <aside class="w-2/3 h-2/5 flex justify-center items-center border border-black border-opacity-40 rounded-2xl bg-neutral">
            <CardIllustration name="はい" src={src} />
          </aside>
          <CardName name="はい" />
          <CardVariant variant={Just('ええ')} />
          <CardDescription
            description={`はい est la version la plus fréquente.\nIl existe aussi ええ qui doit être cependant suivi par une phrase.`}
          />
          <CardSentences
            sentences={[
              '山本：「田中さんですか？」田中：「はい」',
              '山本：「田中さんですか？」田中：「ええ、そうです」',
            ]}
          />
        </div>
        <footer class="p-2 grid grid-cols-3 items-end">
          <CardId id="KDS-0001" />
          <CardTranslation translation="Oui" />
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
