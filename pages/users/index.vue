<template lang="pug">
    div
      div
        a(@click="refresh()") {{refreshing ? 'Refreshing...' : 'Refresh'}}
      div
        table
          thead
            tr
              th preview
              th fullname
              th email
              th birthdate
              th age
              th phone
              th action
          tbody
            tr(v-for="(user) in users")
              td
                img(:src="user.picture.thumbnail")
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
import { mapState } from 'vuex'

const RESULT_SIZE = 15

export default {
  layout: 'users',
  transition: "users",
  head() {
    return {
      title: "World"
    }
  },
  fetch: async ({store}) => {
    const {users} = store.state
    // if empty, then trigger update
    if ( users.list.length === 0 ) {
      await store.dispatch({
        type: 'users/initialize', 
        results: RESULT_SIZE
      })
    }
  },
  data() {
    return {
      refreshing: false
    }
  },
  computed: {
    ...mapState('users/', {
      users: state => state.list
    })
  },
  methods: {
    async refresh () {
      if ( this.refreshing ) {
        return
      }

      this.refreshing = true
      await this.$store.dispatch({
        type: 'users/initialize', 
        results: RESULT_SIZE
      })
      this.refreshing = false
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
