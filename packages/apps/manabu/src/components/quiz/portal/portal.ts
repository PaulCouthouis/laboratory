import { computed, WritableAtom } from 'nanostores'

export const createQuizPortal = (
  initialIsStartedState: WritableAtom<boolean>
) => {
  const isStarted = computed(initialIsStartedState, (s) => s)

  const start = () => {
    initialIsStartedState.set(true)
  }

  const stop = () => {
    initialIsStartedState.set(false)
  }

  return { isStarted, start, stop }
}
