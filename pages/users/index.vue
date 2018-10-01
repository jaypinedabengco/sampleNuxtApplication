<template lang="pug">
    div
      div
        a(@click="refresh()") Refresh
      div
        table
          thead
            tr
              th fullname
              th email
              th birthdate
              th age
              th phone
              th action
          tbody
            tr(v-for="(user) in users")
              td {{user.name.title}} {{user.name.first}} {{user.name.last}}
              td {{user.email}}
              td {{user.dob.date | formatBirthdate}}
              td {{user.dob.age}}            
              td {{user.phone}}
              td  
                nuxt-link(:to="`/users/${user.login.uuid}`") view
            tr(v-if="!users.length")
              td(colspan="6") Loading...
</template>
<script>
import axios from 'axios'
import moment from 'moment'

const RESULT_SIZE = 15

export default {
  asyncData: async ({store}) => {
    const {users} = store.state
    // if empty, then trigger update
    if ( users.list.length <= 0 ) {
      await store.dispatch({
        type: 'users/initialize', 
        results: RESULT_SIZE
      })
    }
    return {users : users.list}
  },
  layout: 'users',
  transition: "users",
  head() {
    return {
      title: "World"
    }
  },
  data() {
    return {
      ids: []
    };
  },
  methods: {
    async refresh () {
      console.log(this.$store)
       await this.$store.dispatch({
        type: 'users/initialize', 
        results: RESULT_SIZE
      })
    }
  },
  filters: {
    formatBirthdate(date) {
      if ( date ) {
        return moment(date).format('MM/DD/YYYY')
      }
    }
  }
}
</script>
