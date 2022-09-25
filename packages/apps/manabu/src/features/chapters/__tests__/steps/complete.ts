import type { Chapter } from '../../entities'

import { expect } from 'vitest'
import { createChapterInteractor } from '../../interactors'
import { createNextChapter, NextChapter } from '../../aggregates'

export const createSteps = () => {
  const repository = createChapterRepository()
  const nextChapter = createNextChapterPresenter()
  const interactor = createChapterInteractor(repository, nextChapter)

  const givenChapters = (chapters: Chapter[]) => {
    repository.chapters = chapters
  }

  const whenStudentCompleteChapters = async (completedChapterIds: string[]) => {
    await interactor.complete(completedChapterIds)
  }

  const thenNextChapterIs = (expectedChapter: Chapter) => {
    expect(nextChapter.get()).toEqual(expectedChapter)
  }

  return { givenChapters, whenStudentCompleteChapters, thenNextChapterIs }
}

const createChapterRepository = () => {
  let chapters = new Array<Chapter>()
  let completedChapterIds = new Array<string>()

  const postCompletedChapterIds = async (newCompletedChaptersId: string[]) => {
    completedChapterIds = newCompletedChaptersId
    await Promise.resolve()
  }

  return {
    get nextChapter() {
      return createNextChapter(chapters, completedChapterIds)
    },
    set chapters(newChapters: Chapter[]) {
      chapters = newChapters
    },
    postCompletedChapterIds,
  }
}

const createNextChapterPresenter = () => {
  let nextChapter: NextChapter

  const get = () => {
    return nextChapter
  }

  const set = (newNextChapter: NextChapter) => {
    nextChapter = newNextChapter
  }

  return { get, set }
}
