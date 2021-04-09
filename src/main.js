import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
Vue.use(require('vue-moment'));

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


import "./plugins/buefy";
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
