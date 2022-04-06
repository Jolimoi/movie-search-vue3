import { createStore } from 'vuex'
import { searchMovies } from '../services/movie-api'

export const store = createStore({
  state() {
    return {
      movies: [],
    }
  },
  mutations: {
    saveMovies(state, movies) {
      state.movies = movies
    },
  },
  getters: {
    movies(state) {
      return state.movies
    },
  },
  actions: {
    async searchMovies({ commit }, searchText) {
      const movies = await searchMovies(searchText)
      commit('saveMovies', movies)
    },
  },
})
