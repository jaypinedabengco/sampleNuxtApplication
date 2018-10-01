export default {
  env: {
    apiUrl: process.env.NUXT_SAMPLE_PROJECT_API || 'http://localhost:3000'
  },
  head: {
    titleTemplate: '%s - Sample Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  css: ['assets/main.css'],
  router: {
    middleware: 'stats'
  }, 
  modules: [
    ['~/modules/simple', {token: '123'}]
  ]
}
