<template>
  <div class="movie">
    <h2 data-test="title-movie">{{ movie.Title }}<span v-if="isRecent(movie)">(Récent)</span></h2>
    <div>
      <img
        width="200"
        :alt="altMovieText(movie.Title)"
        :src="movie.Poster"
        data-test="image-movie"
      />
    </div>
    <p data-test="year-movie">{{ movie.Year }}<span v-if="isNotFinished(movie)">Now</span></p>
  </div>
</template>

<script>
import { hasLessThanOneYear } from '../helpers/tools'

export default {
  name: 'Movie',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    altMovieText(movieTitle) {
      return `The movie titled: ${movieTitle}`
    },
    isNotFinished(movie) {
      return !!(movie.Year && movie.Year.match('–$'))
    },
    isRecent(movie) {
      const movieReleaseDate = new Date()
      if (movie.Year) {
        movieReleaseDate.setFullYear(movie.Year.split('–')[0])
      }
      return hasLessThanOneYear(movieReleaseDate)
    },
  },
}
</script>
