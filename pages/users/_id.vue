<template lang="pug">
    div
        h1 User
        div
            | with id of {{$route.params.id}}
</template>

<script>
export default {
    validate ({ params }) {
        // Must be a number
        return /^\d+$/.test(params.id)
    }
}
</script>

