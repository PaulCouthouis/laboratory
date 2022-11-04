const exactId = (id: string) => `{id}="${id}"`
const allOfTheFollowingIds = (ids: string[]) => {
  const followingIds = ids.map(exactId).join(',')
  return `OR(${followingIds})`
}

export const byId = (id: string) => createFormulaObjectWith(exactId(id))
export const byIds = (ids: string[]) =>
  createFormulaObjectWith(allOfTheFollowingIds(ids))

const createFormulaObjectWith = (filterByFormula: string) => ({
  filterByFormula,
})
