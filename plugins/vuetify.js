import Vue from 'vue'
import Vuetify from 'vuetify'

if (process.BROWSER_BUILD) {
  Vue.use(Vuetify)
}
