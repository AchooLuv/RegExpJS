import Vue from 'vue'
import Router from 'vue-router'
import Home from 'sp/Home'

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
      component: () => import('smc/Mc'),
      children: [
        {
          path: 'counter',
          name: 'Counter',
          meta: {title: '计数功能型元字符 - 元字符 - RegExpJS - Crafted by AchooLuv'},
          component: () => import('smc/counter/Counter')
        }, {
          path: 'location',
          name: 'Location',
          meta: {title: '匹配位置型元字符 - 元字符 - RegExpJS - Crafted by AchooLuv'},
          component: () => import('smc/location/Location')
        }, {
          path: 'single',
          name: 'Single',
          meta: {title: '匹配单个字符型元字符 - 元字符 - RegExpJS - Crafted by AchooLuv'},
          component: () => import('smc/single/Single')
        }, {
          path: 'advance',
          name: 'Advance',
          meta: {title: '进阶型元字符 - 元字符 - RegExpJS - Crafted by AchooLuv'},
          component: () => import('smc/advance/Advance')
        }, {
          path: 'other',
          name: 'Other',
          meta: {title: '其它类型元字符 - 元字符 - RegExpJS - Crafted by AchooLuv'},
          component: () => import('smc/other/Other')
        }, {
          path: 'priority',
          name: 'Priority',
          meta: {title: '元字符运算优先级 - 元字符 - RegExpJS - Crafted by AchooLuv'},
          component: () => import('smc/priority/Priority')
        }
      ]
    }, {
      path: '/mp',
      name: 'Mp',
      redirect: '/mp/engines',
      meta: {title: '匹配原理 - RegExpJS - Crafted by AchooLuv'},
      component: () => import('smp/Mp'),
      children: [{
        path: 'engines',
        name: 'Engines',
        meta: {title: '正则引擎介绍 - 高效正则 - RegExpJS - Crafted by AchooLuv'},
        component: () => import('smp/engines/Engines')
      }, {
        path: 'rules',
        name: 'Rules',
        meta: {title: '引擎的匹配规则 - 高效正则 - RegExpJS - Crafted by AchooLuv'},
        component: () => import('smp/rules/Rules')
      }, {
        path: 'recall',
        name: 'Recall',
        meta: {title: 'NFA引擎与回溯 - 高效正则 - RegExpJS - Crafted by AchooLuv'},
        component: () => import('smp/recall/Recall')
      }]
    }, {
      path: '/er',
      name: 'Er',
      redirect: '/er/application',
      meta: {title: '高效正则 - RegExpJS - Crafted by AchooLuv'},
      component: () => import('ser/Er'),
      children: [{
        path: 'application',
        name: 'Application',
        meta: {title: '正则应用原理 - 高效正则 - RegExpJS - Crafted by AchooLuv'},
        component: () => import('ser/application/Application')
      }, {
        path: 'transmission',
        name: 'Transmission',
        meta: {title: '传动装置优化 - 高效正则 - RegExpJS - Crafted by AchooLuv'},
        component: () => import('ser/transmission/Transmission')
      }, {
        path: 'itself',
        name: 'Itself',
        meta: {title: '表达式本身优化 - 高效正则 - RegExpJS - Crafted by AchooLuv'},
        component: () => import('ser/itself/Itself')
      }, {
        path: 'faster',
        name: 'Faster',
        meta: {title: '提高表达式速度 - 高效正则 - RegExpJS - Crafted by AchooLuv'},
        component: () => import('ser/faster/Faster')
      }, {
        path: 'loop',
        name: 'Loop',
        meta: {title: '消除表达式循环 - 高效正则 - RegExpJS - Crafted by AchooLuv'},
        component: () => import('ser/loop/Loop')
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
