<template lang="pug">
    div
        div
           nuxt-link(to="/users/") BACK
        div
            | with id of {{$route.params.id}} but content will show random user
        div
          img(:src="user.picture.large")
        div
          div 
            | name :  {{user.name.title}}. {{user.name.first}} {{user.name.last}}
          div
            | location : {{ [user.location.street, user.location.city, user.location.state, user.location.postcode].join (', ')}}  
            
</template>

<script>
import axios from 'axios'

export default {
  layout: 'users',
  transition: "users",
  asyncData: async () => {
    const url = `${process.env.apiUrl}/?results=1`
    let {data} = await axios.get(url)
    let {results} = data
    // add individual user
    return { user: results[0] }
  }, 
  created() {
    console.log(this.user)
  }
}
</script>

<style scoped>
a {
  font-weight: bold;
  border: 1px solid #afafaf;
  margin: 10px;
  background: #524f4f;
  color: white;
}
</style>
