import { Just, Nothing } from 'purify-ts'
import { test } from 'vitest'
import { Card } from '../card'
import { Steps } from './steps/look-into-one'

test('Look Into One', async () => {
  const steps = Steps()

  steps.givenCards([
    Card.encode({
      category: 'hiragana',
      description:
        'Utilisable uniquement le matin. Rajoutez ございます pour être plus formel',
      formal: Just('おはようございます'),
      id: 'HG-01',
      name: 'おはよう',
      translation: 'Bonjour (matin)',
    }),
    Card.encode({
      category: 'hiragana',
      description: `Utilisable uniquement l'apres-midi`,
      formal: Nothing,
      id: 'HG-02',
      name: 'こんにちは',
      translation: 'Bonjour (matin)',
    }),
  ])

  await steps.whenCollectorLookIntoCardNamed('HG-02')

  steps.thenDisplayedCardIs({
    category: 'hiragana',
    description: `Utilisable uniquement l'apres-midi`,
    formal: Nothing,
    id: 'HG-02',
    name: 'こんにちは',
    translation: 'Bonjour (matin)',
  })
})
