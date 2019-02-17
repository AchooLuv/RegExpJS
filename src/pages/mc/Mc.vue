<template>
  <div>
    <div class="mc-con">
        <h1>元字符页面</h1>
        <p>
          该部分内容会先集中介绍元字符本身及其作用，在稍后的内容中出现的正则表达式都将使用<span>JavaScript</span>作为载体来详细的讲解如何使用这些元字符,以及一些需要注意的地方（比如它们之间的运算优先级关系）;
          下面涉及到的<span>JavaScript RegExp</span>方法有不清楚的可查阅以下对应的资料:
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mc'
}
</script>

<style lang='scss' scoped>
@import 'sa/styles/var.scss';
.mc-con {
  width: 60%;
  margin-left: 10%;
  @include h1p;
}
</style>
