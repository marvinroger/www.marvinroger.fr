<template>
  <v-app toolbar footer>
    <v-toolbar class="transparent elevation-0">
      <nuxt-link to="/"><img src="../assets/img/logo.png" alt="Logo" class="logo" /></nuxt-link>
      <v-toolbar-title class="white--text">
        {{ pageTitle }}
      </v-toolbar-title>
    </v-toolbar>
    <main>
      <nuxt />
    </main>
    <v-footer class="transparent text-xs-center white--text">
      <p>Copyright © {{ copyrightDate }} Marvin ROGER</p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    pageTitle () {
      switch (this.$route.path) {
        case '/':
          return 'Marvin ROGER'
        case '/portfolio':
          return 'Portfolio'
      }
    },
    copyrightDate: function () {
      const initialYear = 2016
      const currentYear = new Date().getFullYear()
      return currentYear === initialYear ? initialYear : `${initialYear} - ${currentYear}`
    }
  }
}
</script>

<style>
html {
  margin: 0;
  padding: 0;
  background: url("../assets/img/background.jpg") no-repeat center fixed;
  background-size: cover;
}

body, main, .content, .application--light {
  background: none;
}

.logo {
  height: 30px;
}

.footer p {
  width: 100%;
}
</style>
