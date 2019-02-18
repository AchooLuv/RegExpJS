import Vue from 'vue'
import App from './App'
import router from './router'
import animate from 'animate.css'
import VueHighlightJS from 'vue-highlightjs'
import 'sa/styles/reset.css'
import 'sa/styles/iconfont.css'
import 'highlight.js/styles/monokai-sublime.css'

Vue.use(animate)
Vue.use(VueHighlightJS)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
