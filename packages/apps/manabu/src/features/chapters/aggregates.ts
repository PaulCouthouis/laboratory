import type { Chapter } from './entities'

export const createNextChapter = (
  chapters: Chapter[],
  completedChapterIds: string[]
) => {
  const uncompletedChapter = ({ id }: Chapter): boolean => {
    const isNotCompleted = !completedChapterIds.includes(id)
    return isNotCompleted
  }

  return chapters.find(uncompletedChapter)
}

export type NextChapter = ReturnType<typeof createNextChapter>
