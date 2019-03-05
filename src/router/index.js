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

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {title: 'RegExpJS - Crafted by AchooLuv'},
      component: Home
    }, {
      path: '/mc',
      name: 'Mc',
      redirect: '/mc/counter',
      meta: {title: '元字符 - RegExpJS - Crafted by AchooLuv'},
      component: Mc,
      children: [
        {
          path: 'counter',
          name: 'Counter',
          meta: {title: '计数功能型元字符 - 元字符 - RegExpJS - Crafted by AchooLuv'},
          component: Counter
        }, {
          path: 'location',
          name: 'Location',
          meta: {title: '匹配位置型元字符 - 元字符 - RegExpJS - Crafted by AchooLuv'},
          component: Location
        }, {
          path: 'single',
          name: 'Single',
          meta: {title: '匹配单个字符型元字符 - 元字符 - RegExpJS - Crafted by AchooLuv'},
          component: Single
        }, {
          path: 'advance',
          name: 'Advance',
          meta: {title: '进阶型元字符 - 元字符 - RegExpJS - Crafted by AchooLuv'},
          component: Advance
        }, {
          path: 'other',
          name: 'Other',
          meta: {title: '匹其他类型元字符 - 元字符 - RegExpJS - Crafted by AchooLuv'},
          component: Other
        }, {
          path: 'priority',
          name: 'Priority',
          meta: {title: '元字符运算优先级 - 元字符 - RegExpJS - Crafted by AchooLuv'},
          component: Priority
        }
      ]
    }, {
      path: '/mp',
      name: 'Mp',
      meta: {title: '匹配原理 - RegExpJS - Crafted by AchooLuv'},
      component: Mp
    }, {
      path: '/ps',
      name: 'Ps',
      meta: {title: '实用技巧 - RegExpJS - Crafted by AchooLuv'},
      component: Ps
    }, {
      path: '/er',
      name: 'Er',
      meta: {title: '高效正则 - RegExpJS - Crafted by AchooLuv'},
      component: Er
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
