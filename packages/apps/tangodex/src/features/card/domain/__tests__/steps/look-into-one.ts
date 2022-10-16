import { Card } from '../../card'

import { expect } from 'vitest'
import { findInArrayById } from '../../../../../functions/find'
import { CardInteractor } from '../../interactor'

export const Steps = () => {
  const presenter = FakeCardPresenter()
  let interactor: CardInteractor

  const givenCards = (cards: Card[]) => {
    const repository = FakeCardRepository(cards)
    interactor = CardInteractor(repository, presenter)
  }

  const whenCollectorLookIntoCardNamed = async (cardId: Card['id']) => {
    await interactor.lookIntoCard(cardId)
  }

  const thenDisplayedCardIs = (expectedCard: Card) => {
    expect(presenter.get()).toEqual(expectedCard)
  }

  return { givenCards, whenCollectorLookIntoCardNamed, thenDisplayedCardIs }
}

const FakeCardRepository = (cards: Array<Card>) => {
  const findOne = async (id: Card['id']) => {
    const result = findInArrayById(cards, id)
    const card = Card.decode(result)

    return Promise.resolve(card)
  }

  return { findOne }
}

const FakeCardPresenter = () => {
  let card: Card

  const get = () => card
  const set = (newCard: Card) => {
    card = newCard
  }

  return { get, set }
}
