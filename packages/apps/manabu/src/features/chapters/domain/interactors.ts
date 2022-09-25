import type { ChapterRepository, NextChapterPresenter } from './ports'

export const createChapterInteractor = (
  repository: ChapterRepository,
  nextChapter: NextChapterPresenter
) => {
  const complete = async (chapterIds: string[]) => {
    await repository.postCompletedChapterIds(chapterIds)
    nextChapter.set(repository.nextChapter)
  }

  return { complete }
}
