import { describe, expect, it } from 'vitest'
import { createChapterStore } from '../store'

describe('Chapter feature with nanostores', () => {
  it('retrieves next chapter', async () => {
    const { state, actions } = createChapterStore()

    await actions.complete(['chapter-1'])

    expect(state.nextChapter.get()).toEqual({
      id: 'chapter-2',
    })
  })
})
