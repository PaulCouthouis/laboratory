import { Codec, curry } from 'purify-ts'
import { findInArrayById } from './find'

const decode = <Entity>(codec: Codec<Entity>, entity: Entity | undefined) =>
  codec.decode(entity)

export const decodeOneEntityById = <Entity>(
  codec: Codec<Entity>,
  id: string,
  entities: Array<Entity & { id: string }>
) => decode(codec, findInArrayById(entities, id))

const encode = <Entity>(codec: Codec<Entity>, entity: Entity) =>
  codec.encode<Entity>(entity)

export const encodeTo = <Entity>(codec: Codec<Entity>) => curry(encode)(codec)
