<template lang="pug">
    div.container
        h1(v-if="error.statusCode === 404") 
            | Page not found
        h1(v-else)
            | An error occurred
        nuxt-link(to="/") 
            | Go Back Home
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog'
}
</script>
