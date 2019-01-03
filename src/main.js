import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'
import 'style/reset.css'
import 'style/border.css'
import 'style/iconfont.css'
import 'swiper/dist/css/swiper.css'

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
