<template>
  <!-- <div class="portrait">
    <v-card img="/public/doc-images/cards/girl.jpg" height="300px">
      <v-card-row actions class="white--text pl-3 pt-3 pb-3">Picture.png</v-card-row>
    </v-card>
  </div> -->
  <v-card class="card z-depth-3" :img="imageUrl">
    <v-card-row :img="imageUrl" height="150px"></v-card-row>
    <v-card-text :class="color" class="darken-3 white--text">
      <h3 class="title">{{ title }}</h3>

      <p v-html="description"></p>
    </v-card-text>
    <v-card-row actions :class="color" class="darken-1 mt-0">
      <v-btn flat class="white--text" :href="websiteUrl" target="_blank">Site Web</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon v-tooltip:top="{ html: 'Voir les sources sur GitHub' }" v-if="githubUrl" :href="githubUrl" target="_blank">
        <v-icon class="white--text">code</v-icon>
      </v-btn>
    </v-card-row>
  </v-card>
</template>
<script>
// cannot use named export for TYPES
export default {
  props: ['title', 'description', 'color', 'imageUrl', 'githubUrl', 'websiteUrl']
}
</script>
<style scoped>
.card {
  background: none;
}

.card .title {
  color: #fff;
}

.card a {
  text-decoration: none;
}
</style>
