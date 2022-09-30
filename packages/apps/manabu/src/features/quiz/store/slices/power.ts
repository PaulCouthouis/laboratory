import { atom, ReadableAtom } from 'nanostores'

export const createPowerSlice = (initiallyStarted: boolean) => {
  const isStarted = atom(initiallyStarted)

  const start = () => {
    isStarted.set(true)
  }

  const stop = () => {
    isStarted.set(false)
  }

  return { state: isStarted as ReadableAtom<boolean>, actions: { start, stop } }
}
