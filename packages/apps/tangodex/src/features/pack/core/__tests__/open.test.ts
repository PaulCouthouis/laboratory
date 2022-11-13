import type { Cards } from '../../../card/core/domain/cards'

import { Just, MaybeAsync, Nothing } from 'purify-ts'
import { expect, test } from 'vitest'
import { createFakeCards } from '../../../card/core/__tests__/fake/cards'
import { Pile } from '../../../pile/core/domain/pile'
import { PackStore } from '../store'

test('Open a pack and receive a pile of cards', async () => {
  const fakeCards = createFakeCards(3)
  const steps = OpenPackSteps(fakeCards)
  const expectedPile = Pile(fakeCards)

  steps.givenPackWithId('PCK-0001')
  await steps.whenCollectorOpenPack()
  steps.thenPileIs(expectedPile)
})

const OpenPackSteps = (fakeCards: Cards) => {
  let store: PackStore
  const loadFakeCards = (packId: string) =>
    MaybeAsync.fromPromise(async () => {
      return packId === 'PCK-0001' ? Just(fakeCards) : Nothing
    })

  const givenPackWithId = (id: string) => {
    store = PackStore(loadFakeCards).from(id)
  }

  const whenCollectorOpenPack = async () => {
    await store.actions.open()
  }

  const thenPileIs = (expectedPile: Pile) => {
    expect(store.state.pile.extract()?.toStringify()).toBe(
      expectedPile.toStringify()
    )
  }

  return { givenPackWithId, whenCollectorOpenPack, thenPileIs }
}


