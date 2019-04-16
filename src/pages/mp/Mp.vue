<template>
  <div class="mc-con">
      <h1>匹配原理</h1>
      <p>
        该部分内容会先集中介绍元字符本身及其作用，在稍后的内容中出现的正则表达式都将使用<span>JavaScript</span>作为载体来详细的讲解如何使用这些元字符,以及一些需要注意的地方（比如它们之间的运算优先级关系）;
        下面涉及到的<span>JavaScript RegExp</span>方法有不清楚的可查阅以下对应的资料:
      </p>
      <keep-alive>
        <router-view class="animated slideInUp"></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Mp'
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
}
</style>
