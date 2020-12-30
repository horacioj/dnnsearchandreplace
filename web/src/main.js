import Vue from 'vue'
// import $ from 'jquery' //MOTE: assumed already loaded. See vue.config.js

import Buefy from 'buefy'
import '@mdi/font/css/materialdesignicons.min.css'
import 'buefy/dist/buefy.css'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Buefy)
new Vue({
  render: h => h(App),
}).$mount('#app')
