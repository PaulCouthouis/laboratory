import { array, GetType } from 'purify-ts'
import { decodeTo } from '../../../../functions/codec'
import { Card } from './card'

export const Cards = array(Card)
export type Cards = GetType<typeof Cards>
export const decodeCards = decodeTo(Cards)
