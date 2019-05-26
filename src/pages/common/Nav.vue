<template>
  <div>
    <nav class="iconfont nav-pc">
      <router-link class="home" to='/'>RegExpJS</router-link>
      <ul class="nav-l1">
        <li v-for="nav in navs" :key="nav.id">
          <router-link :to='nav.path' v-html='nav.name'></router-link>
          <ul class="nav-l2" v-show="nav.ul">
            <li v-for="li in nav.ul" :key="li.id">
              <a :href='li.anchor'
              v-html='"<span style=\"font-size:.3rem;color:rgb(0, 159, 23)\">&#xe64a;</span>" + li.name'>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <a class="com-disc" href="http://localhost:1234">社区讨论</a>
      <div class="info">
        <p>
          Crafted by
          <a href='https://github.com/AchooLuv' target="_blank">AchooLuv</a>
          with heart.
        </p>
        <p>互联网备案号: 蜀ICP备18019865号</p>
      </div>
    </nav>
    <div class="iconfont homeIcon" @click="show = !show">&#xe600;</div>
    <transition name="navs" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
      <nav class="iconfont nav-mobile" v-if="show" @click="show = !show">
        <router-link class="home" to='/'>RegExpJS</router-link>
        <ul class="nav-l1">
          <li v-for="nav in navs" :key="nav.id">
            <router-link :to='nav.path' v-html='nav.name'></router-link>
            <ul class="nav-l2" v-show="nav.ul">
              <li v-for="li in nav.ul" :key="li.id">
                <a :href='li.anchor'
                v-html='"<span style=\"font-size:.3rem;color:rgb(0, 159, 23)\">&#xe64a;</span>" + li.name'>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <router-link class="home" to='localhost:1234'>社区讨论</router-link>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      show: false,
      screenWidth: 100,
      navs: [{
        id: 1,
        name: '元字符',
        path: '/mc',
        ul: [{
          id: 1,
          name: '计数功能型',
          anchor: '/mc/counter'
        }, {
          id: 2,
          name: '匹配位置型',
          anchor: '/mc/location'
        }, {
          id: 3,
          name: '匹配单个字符型',
          anchor: '/mc/single'
        }, {
          id: 4,
          name: '进阶型元字符',
          anchor: '/mc/advance'
        }, {
          id: 5,
          name: '其他类型',
          anchor: '/mc/other'
        }, {
          id: 6,
          name: '运算优先级',
          anchor: '/mc/priority'
        }]
      }, {
        id: 2,
        name: '匹配原理',
        path: '/mp',
        ul: [{
          id: 1,
          name: '正则引擎介绍',
          anchor: '/mp/engines'
        }, {
          id: 2,
          name: '引擎匹配的规则',
          anchor: '/mp/rules'
        }, {
          id: 3,
          name: 'NFA引擎与回溯',
          anchor: '/mp/recall'
        }]
      }, {
        id: 3,
        name: '高效正则',
        path: '/er',
        ul: [{
          id: 1,
          name: '正则应用原理',
          anchor: '/er/application'
        }, {
          id: 2,
          name: '传动装置优化',
          anchor: '/er/transmission'
        }, {
          id: 3,
          name: '表达式本身优化',
          anchor: '/er/itself'
        }, {
          id: 4,
          name: '提高表达式速度',
          anchor: '/er/faster'
        }, {
          id: 5,
          name: '消除表达式循环',
          anchor: '/er/loop'
        }]
      }]
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'sa/styles/var.scss';
.nav-pc {
  @include nav($nav-width);
}

.nav-mobile {
  @include nav($nav-width);
  @media (max-width: 1024px) {
    width: 5.5rem;
    .info {
      margin-right: .2rem;
    }
    z-index: 10;
  }
}

@media (min-width: 1025px) {
  .homeIcon {
    display: none;
  }
}

@media (max-width: 1024px) {
  .nav-pc {
    display: none;
  }
  .homeIcon {
    position: fixed;
    top: .25rem;
    left: .25rem;
    font-size: .55rem;
    cursor: pointer;
    color: $nav-colors;
  }
}
</style>
