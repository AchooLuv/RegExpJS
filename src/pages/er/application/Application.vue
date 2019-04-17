<template>
  <div class="erc-con">
    <h2>正则表达式的应用原理</h2>
    <p>在掌握了正则表达式应用的基础知识和了解了回溯的细节后，现在来全面学习正则表达式应用到目标字符串的过程：
      <ul>
        <li>正则表达式编译：<span class="ins">检查正则表达式的语法正确性，如果正确，将其编译为内部形式。</span></li>
        <li>传动开始：<span>正则引擎将正则引擎“定位”到目标字符串的其实位置。</span></li>
        <li>元素检测：<span>正则引擎开始测试正则表达式和文本，依次测试表达式的各个元素。</span></li>
        <li>寻找匹配结果：<span>若匹配到一个结果，传统型NFA会“锁定”当前状态，报告匹配成功。</span></li>
        <li>传动装置的驱动过程：<span>若未找到匹配，传动装置就会驱动引擎，从文本的下一个字符开始新一轮的尝试（回到第三步）。</span></li>
        <li>匹配彻底失败：<span>如果从目标字符串的每个字符开始尝试都失败了，就会报告匹配彻底失败。</span></li>
      </ul>
    </p>
    <p>在元素检测这一步中，进行回溯时，还有几点需要注意：
      <ul>
        <li>相连元素：<span class="ins">比如<span class="reg">AchooLuv</span>中的<span class="reg">A</span>
        <span class="reg">c</span>
        <span class="reg">h</span>
        <span class="reg">o</span>
        <span class="reg">o</span>等等，会依次尝试，只有当某个元素匹配失败时才会停止。</span></li>
        <li>量词修饰的元素：<span class="ins">控制权将在量词和被限定的元素之间轮换。</span></li>
        <li>控制权在捕获型括号内外切换时会带来一些开销：<span class="ins">因为一对括号可能属于某个回溯分支，括号的状态就是用于回溯状态的一部分，所以进入和退出捕获型括号时需要修改状态。</span></li>
      </ul>
    </p>
    <p>打造高效正则就是要减少这些处理，以及如何适当的应用这些技巧，接下来将讲解这些技巧和注意事项！</p>
  </div>
</template>

<script>
export default {
  name: 'Application'
}
</script>

<style lang="scss" scoped>
@import 'sa/styles/var.scss';
.erc-con {
  @include tip;
}
</style>
