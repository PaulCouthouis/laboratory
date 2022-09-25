import type { Chapter } from '../domain/entities'

import { atom, ReadableAtom, WritableAtom } from 'nanostores'
import { createNextChapter, NextChapter } from '../domain/aggregates'
import { createChapterInteractor } from '../domain/interactors'

export const createChapterStore = () => {
  const nextChapterAtom = atom<NextChapter>()

  const repository = createChapterRepository()
  const presenter = createNextChapterPresenter(nextChapterAtom)
  const interactor = createChapterInteractor(repository, presenter)

  return {
    state: {
      nextChapter: nextChapterAtom as ReadableAtom<NextChapter>,
    },
    actions: { ...interactor },
  }
}

const createChapterRepository = () => {
  const chapters = new Array<Chapter>(
    {
      id: 'chapter-1',
    },
    {
      id: 'chapter-2',
    }
  )
  let completedChapterIds = new Array<string>()

  const postCompletedChapterIds = async (newCompletedChaptersId: string[]) => {
    completedChapterIds = newCompletedChaptersId
    await Promise.resolve()
  }

  return {
    get nextChapter() {
      return createNextChapter(chapters, completedChapterIds)
    },
    postCompletedChapterIds,
  }
}

const createNextChapterPresenter = (
  nextChapterAtom: WritableAtom<NextChapter>
) => {
  const set = (newNextChapter: NextChapter) => {
    nextChapterAtom.set(newNextChapter)
  }

  return { set }
}
