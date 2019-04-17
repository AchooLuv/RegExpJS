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
import Er from 'sp/er/Er'
import Application from 'sp/er/application/Application'
import Transmission from 'sp/er/transmission/Transmission'
import Itself from 'sp/er/itself/Itself'
import Faster from 'sp/er/faster/Faster'

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
      path: '/er',
      name: 'Er',
      redirect: '/er/application',
      meta: {title: '高效正则 - RegExpJS - Crafted by AchooLuv'},
      component: Er,
      children: [{
        path: 'application',
        name: 'Application',
        meta: {title: '正则应用原理 - 高效正则 - RegExpJS - Crafted by AchooLuv'},
        component: Application
      }, {
        path: 'transmission',
        name: 'Transmission',
        meta: {title: '传动装置优化 - 高效正则 - RegExpJS - Crafted by AchooLuv'},
        component: Transmission
      }, {
        path: 'itself',
        name: 'Itself',
        meta: {title: '表达式本身优化 - 高效正则 - RegExpJS - Crafted by AchooLuv'},
        component: Itself
      }, {
        path: 'faster',
        name: 'Faster',
        meta: {title: '提高表达式速度 - 高效正则 - RegExpJS - Crafted by AchooLuv'},
        component: Faster
      }]
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
