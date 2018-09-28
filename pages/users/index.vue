<template lang="pug">
    div
        h1 List of users
        ul
            li(v-for="(id) in ids") 
                 nuxt-link(:to="`/users/${id}`") {{id}}
</template>
<script>
export default {
    head () {
        return {
        title: "World"
        }
    },     
    created() {
        for ( let i = 0; i <= 10; i++ ) {
            this.ids.push(Math.floor(Math.random() * 10000))
        }
    },
    data() {
        return {
            ids: []
        }
    }
}
</script>
