import Vue from 'vue'
import Router from 'vue-router'
import Home from 'sp/Home'
import Mc from 'sp/mc/Mc'
import Counter from 'sp/mc/counter/Counter'
import Location from 'sp/mc/location/Location'
import Single from 'sp/mc/single/Single'
import Advance from 'sp/mc/advance/Advance'
import Other from 'sp/mc/other/Other'
import Priority from 'sp/mc/priority/Priority'
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
      component: Mc,
      children: [
        {
          path: 'counter',
          name: 'Counter',
          component: Counter
        }, {
          path: 'location',
          name: 'Location',
          component: Location
        }, {
          path: 'single',
          name: 'Single',
          component: Single
        }, {
          path: 'advance',
          name: 'Advance',
          component: Advance
        }, {
          path: 'other',
          name: 'Other',
          component: Other
        }, {
          path: 'priority',
          name: 'Priority',
          component: Priority
        }
      ]
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
