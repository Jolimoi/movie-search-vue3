<template>
  <h1>{{ title }}</h1>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const title = ref('Hello, World')

    return { title }
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: grid;
  place-items: center;
}
h1 {
  border: 1px solid #000;
  padding: 40px;
}
</style>