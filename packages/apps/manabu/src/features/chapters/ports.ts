import type { NextChapter } from './aggregates'

export interface ChapterRepository {
  nextChapter: NextChapter
  postCompletedChapterIds(chapterIds: string[]): Promise<void>
}

export interface NextChapterPresenter {
  set(newNextChapter: NextChapter): void
}
