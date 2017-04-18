<template>
  <div>
    <v-row>
      <v-col v-for="work in portfolio.works" :key="work.title" xs12="xs12" sm6="sm6" lg3="lg3" class="work">
        <Work :title="work.title" :description="work.description" :color="work.color" :image-url="work.imageUrl" :github-url="work.githubUrl" :website="work.website" />
      </v-col>
    </v-row>
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

<style scoped>
.work {
  margin: .5rem 0;
}
</style>
