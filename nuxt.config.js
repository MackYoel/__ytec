module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ses',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.neax.io/assets/neax-fonts.css'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

  plugins: [
    '~/plugins/font-awesome'
  ],

  modules: [
    {
      src: '@neax/designup', options: { theme: 'purple' }
    },
    // '@nuxtjs/axios',
    // '@nuxtjs/auth'
  ],

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
