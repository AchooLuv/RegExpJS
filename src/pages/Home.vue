<template>
  <div>
    <div class='h-con'>
      <h1>正则表达式</h1>
      <p>
        正则表达式是一门功能极其强大的文本处理语言，现在几乎被所有的高级语言所支持。本教程是网站作者在学习
        <a href="https://www.amazon.cn/mn/detailApp/ref=asc_df_05965281242949480/?asin=0596528124&tag=douban-23&creative=2384&creativeASIN=0596528124&linkCode=df0" target="_blank">《精通正则表达式 第三版》</a>
        一书后，总结的一些学习感悟与收获！教程将会以<span>JavaScript</span>为载体，由浅入深的讲解正则表达式的匹配原理、使用方法以及如何编写高效正则表达式。
      </p>
      <div class="tools">正则学习工具推荐：</div>
      <a class="iconfont tool animated zoomInLeft" v-for="ts in tools" :key="ts.id" :href="ts.url">
        <i v-html="icon"></i>
        <span v-html="ts.name"></span>
        <p v-html="ts.desc"></p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      icon: '&#xe613;',
      tools: [{
        id: 1,
        name: 'RegExr',
        desc: '提供了非常详细的可查询内容的正则表达式学习网站！',
        url: 'https://regexr.com/'
      }, {
        id: 2,
        name: 'RegExper',
        desc: '一个真正的正则表达式匹配规则图示化的学习网站！',
        url: 'https://regexper.com/'
      }, {
        id: 3,
        name: 'RegExp&nbsp;Preview',
        desc: '一款图示化正则规则的轻量级VS&nbsp;Code可扩展插件',
        url: 'https://marketplace.visualstudio.com/items?itemName=le0zh.vscode-regexp-preivew'
      }]
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'sa/styles/var.scss';
.h-con {
  width: 60%;
  margin-left: 10%;
  @include h1p;
  .tools {
    margin: .4rem 0;
    font-size: .42rem;
    color: rgb(0, 133, 138);
  }
  .tool {
    display: block;
    box-sizing: border-box;
    width: 50%;
    height: 2rem;
    padding: .15rem;
    background: rgb(255, 255, 255);
    border-radius: .05rem;
    box-shadow: 3px 2px 3px rgb(197, 195, 195);
    border: 1px solid rgb(148, 148, 148);
    overflow: hidden;
    &:nth-of-type(2) {
      @include pa(50%,-30%);
    }
    &:nth-of-type(3) {
      @include pa(100%,-60%);
    }
    i,span {
      color: $p-color;
      font-size: .5rem;
      font-weight: 100;
    }
    p {
      margin-top: .2rem;
    }
  }
}
</style>
