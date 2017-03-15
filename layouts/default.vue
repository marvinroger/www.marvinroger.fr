<template>
  <v-app top-toolbar footer>
    <v-toolbar class="transparent z-depth-0">
      <nuxt-link to="/"><img src="../assets/img/logo.png" alt="Logo" class="logo" /></nuxt-link>
      <v-toolbar-title>
        {{ pageTitle }}
      </v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content class="content">
        <v-container fluid>
          <nuxt/>
        </v-container>
      </v-content>
    </main>
    <v-footer class="transparent">
      <div class="text-xs-center">Copyright © {{ copyrightDate }} Marvin ROGER</div>
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

body, main, .content {
  background: none;
}

.logo {
  height: 30px;
}

.content {
  padding: 1rem 3rem 0;
}
</style>
