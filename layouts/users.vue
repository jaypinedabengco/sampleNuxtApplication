<template lang="pug">
    div.container
        h1 User Page
        nuxt
</template>

<script>
export default {
  middleware: 'auth',
  head: () => {
    return {
      title: 'Store'
    }
  }
}
</script>

<style scoped>
</style>
