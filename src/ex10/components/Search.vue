<template>
  <form class="search">
    <input v-model="search" type="text" data-test="search-text" />
    <input type="submit" value="SEARCH" data-test="search" @click.prevent="handleSubmit" />
  </form>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      search: '',
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('search', this.search)
    },
  },
}
</script>
