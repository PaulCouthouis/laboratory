import { CountdownPublisher } from 'src/ports/output'
import { RemainingTimes } from 'src/values'

export const buildFakeCountdownPublisher: BuildFakeCountdownPublisher = () => {
  let remainingTimesNotifications: Set<RemainingTimes>

  const initRemainingTimesNotifications = (
    initialRemainingTimesNotifications: Set<RemainingTimes>
  ) => {
    remainingTimesNotifications = initialRemainingTimesNotifications
  }

  const subscribe = (update: (remainingTimes: RemainingTimes) => void) => {
    const remainingTimesIterator: RemainingTimesIterator =
      remainingTimesNotifications.values()

    const notify = () => {
      const { value, done } = remainingTimesIterator.next()

      if (!done) {
        update(value)
        notify()
      }
    }

    notify()
  }

  return { initRemainingTimesNotifications, subscribe }
}

interface RemainingTimesIterator extends Iterator<RemainingTimes> {
  next(): IteratorResult<RemainingTimes, RemainingTimes>
}

type BuildFakeCountdownPublisher = () => CountdownPublisher & {
  initRemainingTimesNotifications: (
    initialRemainingTimesNotifications: Set<RemainingTimes>
  ) => void
}
