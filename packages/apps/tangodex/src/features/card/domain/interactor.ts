import type { Either } from 'purify-ts'
import type { Card } from './card'

export const CardInteractor = (
  repository: CardRepository,
  presenter: CardPresenter
) => {
  const lookIntoCard = async (cardId: Card['id']) => {
    const result = await repository.findOne(cardId)

    if (result.isRight()) {
      presenter.set(result.extract())
    }
  }

  return { lookIntoCard }
}
export type CardInteractor = ReturnType<typeof CardInteractor>

interface CardRepository {
  findOne: (id: Card['id']) => Promise<Either<string, Card>>
}

interface CardPresenter {
  set: (card: Card) => void
}
