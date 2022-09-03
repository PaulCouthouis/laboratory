import { test } from 'vitest'
import { buildStep } from './steps/read-result'

test('Read Result', async () => {
  const steps = buildStep()

  steps.givenMarkedResultIs('wrong')

  await steps.whenReadResult()

  steps.thenResultIs('wrong')
})
