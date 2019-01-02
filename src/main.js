import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'style/reset.css'
import 'style/border.css'
import 'style/iconfont.css'

fastClick.attach(document.body)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
