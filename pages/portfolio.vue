<template>
  <div>
    <v-container grid-list-lg fluid>
      <v-layout wrap>
        <v-flex v-for="work in portfolio.works" :key="work.title" xs12 sm6 md4 lg3 class="work">
          <Work :title="work.title" :description="work.description" :color="work.color" :image-url="work.imageUrl" :github-url="work.githubUrl" :website="work.website" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Work from '~components/portfolio/Work'
import portfolio from '~assets/portfolio'

export default {
  data () {
    return {
      portfolio
    }
  },
  head () {
    return {
      title: 'Portfolio'
    }
  },
  components: { Work }
}
</script>
