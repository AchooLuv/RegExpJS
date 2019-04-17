<template>
  <div class="er-con">
      <h1>高效正则</h1>
      <p>
        得益于<span>JavaScript</span> 的正则引擎是基于表达式的传统型NFA引擎，所以我们能对其进行精确的控制，让我们能够精心调校我们编写的正则表达式来达到预期的匹配结果！想要编写高效的正则表达式，提高取得结果的速度通常有两种优化方法：
        <ul>
          <li>加速某些操作：<span class="ins">某些类型的匹配，比如<span class="reg">/\d+/</span>正则引擎会有特殊处理方案，执行速度比通用的处理机快！</span></li>
          <li>避免冗余操作：<span class="ins">如果正则引擎对于产生正确的结果来说，某些特殊的操作是不要的，或者某些操作能够应用到比之前更少的文本，忽略这些操作能够节省时间。比如<span class="reg">/^A/</span>，只有在字符串开头位置才会匹配，如果在此处无法匹配，则宣告失败！</span></li>
        </ul>
      </p>
      <keep-alive>
        <router-view class="animated bounceInUp"></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Er'
}
</script>

<style lang='scss' scoped>
@import 'sa/styles/var.scss';
.er-con {
  width: 60%;
  margin: 1rem 0 0 8rem;
  @include h1p;
  ul {
    li{
      color: rgb(201, 204, 0);
      font-size: 0.32rem;
      list-style: circle;
    }
  }
  h2 {
    font-size: .4rem;
    font-weight: 100;
    color: rgb(219, 135, 9);
    margin: .6rem 0 .3rem 0;
  }
  @media (max-width: 1024px) {
    width: $docs-width;
    margin-left: 5%;
  }
  span.ins{
    font-size: 0.3rem;
  }
  span.reg{
    padding: 0 .1rem;
    border-radius: .05rem;
    color: rgb(87, 238, 94);
    background: rgb(130, 138, 127);
    overflow: hidden;
  }
}
</style>
