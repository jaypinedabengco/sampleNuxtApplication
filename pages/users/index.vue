<template lang="pug">
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
</template>
<script>
import axios from 'axios'
import moment from 'moment'

export default {
  asyncData: async () => {
    const include = ['id', 'name', 'email', 'dob', 'phone', 'login']
    const url = `${process.env.apiUrl}/?results=10&inc=${include.join(',')}`
    let {data} = await axios.get(url)
    let {results} = data
    // add users to list
    return { users: results }
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
    openButShowRandomUser(id) {
      console.log('hey')
    }
  },
  created() {
    for (let i = 0; i <= 10; i++) {
      this.ids.push(Math.floor(Math.random() * 10000));
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
