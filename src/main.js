import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import '@/assets/fifter/img-fifter.js'
import router from '@/router/index.js'
import Http from '@/until/http.js'
import store from '@/store/index.js'
import 'animate.css'
Vue.config.productionTip = false
Vue.prototype.$http = new Http()


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


