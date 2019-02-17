import Vue from 'vue'
import App from './App'
import router from './router'
import animate from 'animate.css'
import 'sa/styles/reset.css'
import 'sa/styles/iconfont.css'

Vue.use(animate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
