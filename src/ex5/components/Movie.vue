<template>
  <div class="movie">
    <h2 data-test="title-movie">{{ movie.Title }}</h2>
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
  },
}
</script>
