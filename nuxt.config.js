module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'fr'
    },
    titleTemplate: '%s - Marvin ROGER',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Site Web personnel de Marvin Roger, jeune développeur logiciel basé à Paris.' },
      // Open Graph
      { property: 'og:title', content: 'Site Web personnel de Marvin ROGER' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.marvinroger.fr' },
      { property: 'og:image', content: 'https://www.marvinroger.fr/img/avatar.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['vuetify/dist/vuetify.min.css', '~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffffff' },
  /*
  ** Plugins configuration
  */
  plugins: ['~plugins/vuetify'],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
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
