import { array, GetType } from 'purify-ts'
import { decodeTo } from '../../../../functions/codec'
import { Card } from './card'

export const Pile = array(Card)
export type Pile = GetType<typeof Pile>
export const decodePile = decodeTo(Pile)
