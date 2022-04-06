const API_KEY = 'a5549d08'

export const searchMovies = async (search) => {
  const moviesSearchURL = `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`

  const response = await fetch(moviesSearchURL)
  const jsonResponse = await response.json()

  if (jsonResponse.Response === 'False') {
    throw new Error(jsonResponse.Error)
  }
  return jsonResponse.Search
}
