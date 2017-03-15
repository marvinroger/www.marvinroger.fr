<template>
  <div>
    <v-row>
      <v-col xs12="xs12" sm6="sm6" lg4="lg4" xl3="xl3" class="centered">
        <v-card class="z-depth-3">
          <v-card-text class="text-xs-center">
            <img src="../assets/img/avatar.jpg" alt="Photo do Marvin ROGER" id="avatar" />

            <h1 class="headline mt-3">Marvin ROGER</h1>
            <h2 class="title">Développeur logiciel</h2>
            <p id="location">
              <v-icon>place</v-icon>
              <span>Paris, France</span>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col xs12="xs12" class="text-xs-center mt-3">
        <a href="https://github.com/marvinroger" class="link" target="_blank">
          <v-btn secondary>
            <v-icon left>code</v-icon>
            GitHub
          </v-btn>
        </a>
        <nuxt-link class="link" to="/portfolio">
          <v-btn error>
            <v-icon left>dashboard</v-icon>
            Portfolio
          </v-btn>
        </nuxt-link>
        <a :href="'mailto:' + ['bonjourmarvin', 'marvinroger.fr'].join('@')" class="link" target="_blank">
          <v-btn class="blue">
            <v-icon left>email</v-icon>
            E-mail
          </v-btn>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.centered {
  margin: auto;
}

#avatar {
  display: block;
  width: 50%;

  margin: auto;

  border-radius: 100%;
}

#location {
  line-height: 24px;
}

#location span {
  display: block;
}

.title {
  font-weight: 300;
}

.link {
  text-decoration: none;
}
</style>
