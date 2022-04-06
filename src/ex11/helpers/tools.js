export const hasLessThanOneYear = (releaseDate = new Date()) => {
  const now = new Date()
  const oneYear = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
  return releaseDate > oneYear
}
