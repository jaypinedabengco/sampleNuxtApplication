<template lang="pug">
    div.container
        nuxt
</template>
<script>
export default {
  head: () => {
    return {
      title: 'Default'
    }
  }
}
</script>

<style>
.container a {
  text-decoration: none;
  cursor: pointer;
}
.container a:hover {
  text-decoration: underline;
}
</style>
