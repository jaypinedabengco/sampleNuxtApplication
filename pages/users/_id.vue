<template lang="pug">
    div
        div(v-if="user")
          div
            img(:src="user.picture.large")
          div
            div
              | uuid : {{user_uuid}} 
            div
              | name :  {{user.name.title}}. {{user.name.first}} {{user.name.last}}
            div
              | location : {{ [user.location.street, user.location.city, user.location.state, user.location.postcode].join (', ')}}  
        div(v-else)
          div
            | user with uuid of {{user_uuid}} not found
        div
           nuxt-link(to="/users/") BACK
</template>

<script>
import axios from 'axios'

export default {
  layout: 'users',
  transition: 'users',
  asyncData: async ({store, params, redirect}) => {
    const {users} = store.state

    // if list is empty, then revert back to list
    if ( users.list.length === 0 ) {
      return redirect('/users/')
    }

    // trigger set by id
    await store.dispatch({
      type: 'users/selectUserByUUID', 
      uuid: params.id
    })

    // add individual user
    return {
      user_uuid: params.id, 
      user: users.selected,  
    }
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

.note {
  color: #f90000;
}
</style>
