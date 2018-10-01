<template lang="pug">
    div
        | test
</template>
<script>
export default {
  asyncData: async context => {
    console.log('asyncData');
  },
  fetch() {
    console.log('fetch');
  },
  head: () => {
    return {
      title: 'Test'
    }
  }
}
</script>
