
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

const opts = { }
Vue.use(Vuetify)

new Vue({
  vuetify: new Vuetify(opts)
}).$mount('#app')
