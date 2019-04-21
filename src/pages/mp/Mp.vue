<template>
  <div class="mc-con">
      <h1>匹配原理</h1>
      <p>该部分主要从正则引擎的分类介绍、正则引擎的匹配规则、传统型NFA和回溯算法在正则中的应用原理这三方面来讲解正则表达式的匹配原理！
      </p>
      <keep-alive>
        <router-view class="animated fadeInUp"></router-view>
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
