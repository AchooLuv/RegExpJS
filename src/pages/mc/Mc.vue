<template>
  <div class="mc-con">
      <h1>元字符</h1>
      <p>
        该部分内容会先集中介绍元字符本身及其作用，在稍后的内容中出现的正则表达式都将使用<span>JavaScript</span>作为载体来详细的讲解如何使用这些元字符,以及一些需要注意的地方（比如它们之间的运算优先级关系）;
        下面涉及到的<span>JavaScript RegExp</span>方法有不清楚的可查阅以下对应的资料:
      </p>
      <div class="infos">
        <a target="_blank" v-for="info in infos" :key="info.id" :href="info.url" v-html="info.name"></a>
      </div>
      <keep-alive>
        <router-view class="animated slideInUp"></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Mc',
  data () {
    return {
      infos: [{
        id: 1,
        name: '.exec()<p>前往MDN查看该方法</p>',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec'
      }, {
        id: 2,
        name: '.test()<p>前往MDN查看该方法</p>',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test'
      }, {
        id: 3,
        name: '.match()<p>前往MDN查看该方法</p>',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match'
      }, {
        id: 4,
        name: '.search()<p>前往MDN查看该方法</p>',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search'
      }, {
        id: 5,
        name: '.replace()<p>前往MDN查看该方法</p>',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace'
      }]
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'sa/styles/var.scss';
.mc-con {
  width: 60%;
  margin: 1rem 0 0 8rem;
  @include h1p;
  @media (max-width: 1024px) {
    width: $docs-width;
    margin-left: 5%;
  }
  .infos {
    display: -webkit-flex;
    display: flex;
    height: 1rem;
    margin: .2rem 0;
    border-radius: .1rem;
    overflow: hidden;
    background: $nav-colors;
    a {
      flex: 0 0 20%;
      box-sizing: border-box;
      padding: .1rem;
      color: rgb(255, 255, 255);
      text-align: center;
      border-right: 1px solid rgb(0, 217, 224);
      line-height: 1.5;
    }
  }
}
</style>
