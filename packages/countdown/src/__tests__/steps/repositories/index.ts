import { CountdownRepository } from 'src/output'
import { RemainingTimes } from 'src/values'

export const buildFakeCountdownRepository: () => FakeCountdownRepository =
  () => {
    let remainingTimes: RemainingTimes

    const initRemainingTimes = (initialRemainigTimes: RemainingTimes) => {
      remainingTimes = initialRemainigTimes
    }

    const show = () => {
      return remainingTimes
    }

    return { initRemainingTimes, show }
  }

type FakeCountdownRepository = CountdownRepository & {
  readonly initRemainingTimes: (initialRemainigTimes: RemainingTimes) => void
}
