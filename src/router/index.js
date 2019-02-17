import Vue from 'vue'
import Router from 'vue-router'
import Docs from '@/pages/Docs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Docs',
      component: Docs
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
