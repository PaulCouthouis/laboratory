import { atom } from 'nanostores'

import { buildCountdown } from 'src/domain/entities'
import { buildCountdownActions } from 'src/domain/ports/input'
import { CountdownPublisher, Update } from 'src/domain/ports/output'
import { RemainingTimes } from 'src/domain/values'

const buildCountdownPublisher: (finalTime: Date) => CountdownPublisher = (
  finalTime
) => {
  const subscribers = new Array<Update>()
  const countdown = buildCountdown(finalTime)

  const notify = (remainingTimes: RemainingTimes) => {
    subscribers.forEach((update) => {
      update(remainingTimes)
    })
  }

  const refresh = (currentTime: Date) => {
    const remainingTimes = countdown.calculateRemainingTime(currentTime)
    notify(remainingTimes)
  }

  const subscribe = (update: Update) => {
    subscribers.push(update)
  }

  return { refresh, subscribe }
}

export const init = (
  loop: (cb: (startTime: Date) => void) => void,
  finalTime: Date
) => {
  const countdownPublisher = buildCountdownPublisher(finalTime)
  const { refreshCountdown, subscribeCountdown } =
    buildCountdownActions(countdownPublisher)

  const remainingTimesAtom = atom<RemainingTimes>()
  const update = (remainingTimes: RemainingTimes) => {
    remainingTimesAtom.set(remainingTimes)
  }

  subscribeCountdown(update)
  loop((startTime) => refreshCountdown(startTime))

  return remainingTimesAtom
}
