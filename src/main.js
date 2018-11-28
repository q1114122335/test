import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)
import router from './assets/js/router.js'
import './assets/js/swiper.min.js'
import Mint from 'mint-ui';
Vue.use(Mint);
import '../node_modules/mint-ui/lib/style.css';
import './assets/css/cssreset.css'
import './assets/css/swiper.min.css'

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
