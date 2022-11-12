import { createStore } from 'solid-js/store'
import type { Pile } from '../domain/pile'

export const PileStore = (pile: Pile) => {
  const [state, setState] = createStore(pile)

  const next = () => setState((pile) => pile.next())
  const previous = () => setState((pile) => pile.previous())
  const goTo = (index: number) => setState((pile) => pile.goTo(index))

  const current = () => state.current
  const isFirst = () => state.isFirst
  const isLast = () => state.isLast

  return {
    state: {
      current,
      isFirst,
      isLast,
    },
    actions: {
      next,
      previous,
      goTo,
    },
  }
}
export type PileStore = ReturnType<typeof PileStore>
