<template>
  <nav class="nav">
    <router-link class="home" to='./'>RegExpJS</router-link>
    <ul class="nav-l1">
      <li v-for="nav in navs" :key="nav.id">
        <router-link :to='nav.path' v-html='nav.name'></router-link>
        <ul class="iconfont nav-l2" v-show="nav.ul">
          <li v-for="li in nav.ul" :key="li.id">
            <a :href='li.anchor'
            v-html='"<span style=\"font-size:.3rem;color:rgb(0, 159, 23)\">&#xe64a;</span>" + li.name'>
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="info">
      <p>
        Crafted by
        <a href='https://github.com/AchooLuv' target="_blank">AchooLuv</a>
        with heart.
      </p>
      <p>互联网备案号: 蜀ICP备18019865号-1</p>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      navs: [{
        id: 1,
        name: '元字符',
        path: '/mc',
        ul: [{
          id: 1,
          name: '计数功能型',
          anchor: '#counter'
        }, {
          id: 2,
          name: '匹配位置型',
          anchor: '#location'
        }, {
          id: 3,
          name: '匹配单个字符型',
          anchor: '#single'
        }, {
          id: 4,
          name: '进阶型元字符',
          anchor: '#advance'
        }, {
          id: 5,
          name: '其他类型',
          anchor: '#other'
        }, {
          id: 6,
          name: '运算优先级',
          anchor: '#priority'
        }]
      }, {
        id: 2,
        name: '匹配原理',
        path: '/mp'
      }, {
        id: 3,
        name: '实用技巧',
        path: '/ps'
      }, {
        id: 4,
        name: '高效正则',
        path: '/er'
      }]
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'sa/styles/var.scss';
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: $nav-width;
  height: 100%;
  box-sizing: border-box;
  border-right: .2rem solid rgb(189, 189, 189);
  .home {
    display: block;
    @include thc(1rem);
    font-size: .5rem;
    text-align: center;
    color: rgb(0, 197, 211);
    border-bottom: 1px solid rgb(231, 227, 202);
  }
  .nav-l1 {
    margin: .5rem 0 0 .5rem;
    li {
      margin: .3rem 0;
      a {
        display: block;
        font-size: .35rem;
        color: $nav-color;
        letter-spacing: 2px;
      }
      .nav-l2 {
        margin: 0 0 0 .5rem;
        li {
          a {
            font-size: .32rem;
          }
        }
      }
    }
  }
  .info {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: .5rem;
    p {
      @include thc(.5rem);
      color:rgb(95, 123, 126);
    }
  }
}
</style>
