import { test } from 'vitest'
import { createSteps } from './steps/complete'

test('Complete chapters', async () => {
  const steps = createSteps()

  steps.givenChapters([
    { id: 'chapter-1' },
    { id: 'chapter-2' },
    { id: 'chapter-3' },
    { id: 'chapter-4' },
  ])

  await steps.whenStudentCompleteChapters(['chapter-1', 'chapter-2'])

  steps.thenNextChapterIs({
    id: 'chapter-3',
  })
})
