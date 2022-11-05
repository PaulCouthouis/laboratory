import type { Signal } from 'solid-js'
import type { Pile } from '../domain/pile'

export const PileSignal = ([getPile, setPile]: Signal<Pile>) => {
  const next = () => setPile((pile) => pile.next())
  const previous = () => setPile((pile) => pile.previous())
  const goTo = (index: number) => setPile((pile) => pile.goTo(index))

  const current = () => getPile().current
  const isFirst = () => getPile().isFirst
  const isLast = () => getPile().isLast

  return { next, previous, goTo, current, isFirst, isLast }
}
