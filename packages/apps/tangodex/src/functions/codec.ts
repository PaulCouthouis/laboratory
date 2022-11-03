import { Codec, curry } from 'purify-ts'

export const decodeTo = <Entity>(codec: Codec<Entity>) => curry(codec.decode)
export const encodeTo = <Entity>(codec: Codec<Entity>) => curry(codec.encode)
