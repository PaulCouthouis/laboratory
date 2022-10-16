function compare<T>(x: T, y: T) {
  return x === y
}

export const compareId = <Id>(comparedId: Id) => {
  return ({ id }: { id: Id }) => compare<Id>(comparedId, id)
}
