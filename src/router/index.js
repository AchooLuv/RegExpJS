import Vue from 'vue'
import Router from 'vue-router'
import Home from 'sp/Home'
import Mc from 'sp/mc/Mc'
import Mp from 'sp/mp/Mp'
import Ps from 'sp/ps/Ps'
import Er from 'sp/er/Er'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/mc',
      name: 'Mc',
      component: Mc
    }, {
      path: '/mp',
      name: 'Mp',
      component: Mp
    }, {
      path: '/ps',
      name: 'Ps',
      component: Ps
    }, {
      path: '/er',
      name: 'Er',
      component: Er
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
