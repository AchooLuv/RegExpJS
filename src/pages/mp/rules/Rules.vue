<template>
  <div class="mpc-con">
    <h2>正则引擎的匹配规则</h2>
    <p>正则引擎的匹配规则可以归纳为两点：优先选择文本最左端的匹配结果；标准量词优先匹配！接下来将详细讲讲这两条规则：</p>
    <h3><span class="iconfont jh">&#xe64a;</span>优先选择文本最左端的匹配结果</h3>
    <p><span class="ins">根据该规则，起始位置最靠左的匹配结果总是优先于其它可能的匹配结果，需要注意的是：该规则并未规定优先的匹配结果的长度，而只是规定，在所有的可能的匹配结果中，优先选择开始位置最左端的。</span></p>
    <p><span class="ins">该规则的由来：匹配先从需要查找的字符串的起始位置尝试匹配。此处“尝试匹配”的意思是：在当前位置测试整个正则表达式能匹配的每样文本。若在当前位置测试了所有可能之后不能找到匹配结果，就需要从字符串的第二个字符之前的位置开始重新尝试。在找到匹配结果以前必须在所有位置重复此过程，只有在尝试过所有的起始位置都不能找到匹配结果的情况下，才会宣告“匹配失败”！</span></p>
    <p><span class="ins">现在我们可以回过头来看<router-link to="../../mc/single">匹配单个字符型元字符</router-link>中怪异的例子了，先看这个最简单、最好理解的例子：</span></p>
    <pre v-highlightjs>
      <code class="javascript">      var regexp = /[Lo]/i,    // 只要其中任意一个字符匹配成功,便终止匹配
        result = regexp.exec('AchooLuv');
        console.log(result[0]);   // 匹配结果为: o 而非 L</code>
    </pre>
    <p><span class="ins">按照表达式列出的字符顺序，为什么不是优先匹配字符<span class="reg">L</span>，而是匹配字符<span class="reg">o</span>，为了更好理解，现在我们把上例改一改：</span></p>
    <pre v-highlightjs>
      <code class="javascript">      var regexp = /L|o/i,    // 不再使用字符组，改用多选分支
        result = regexp.exec('AchooLuv');
        console.log(result[0]);   // 匹配结果依然为: o 而非 L
        console.log(result.index)   // 3  说明是在第一个字符o处匹配成功</code>
    </pre>
    <p><span class="ins">用上面的匹配规则来解释这种现象就很好理解：为什么不是优先匹配字符<span class="reg">L</span>，而是匹配字符<span class="reg">o</span>了。在匹配时，基于表达式的传统型NFA引擎，首先在字符串<span class="reg">AchooLuv</span>的第一个字符<span class="reg">A</span>处，测试表达式中的<span class="reg">L</span>和<span class="reg">o</span>是否能够匹配，不能，则在下一位置，字符<span class="reg">c</span>处再次测试，依然不能满足匹配，继续向后移动，直到在字符串中第一个字符<span class="reg">o</span>处，测试表达式中的<span class="reg">L</span>和<span class="reg">o</span>时，此时字符<span class="reg">o</span>满足匹配，结束整个匹配！</span></p>
    <p><span class="ins">再看其中的后一个例子，也是同样的道理：</span></p>
    <pre v-highlightjs>
      <code class="javascript">      var regexp = /[Lo]{2}/i,    // 或者写成 /(?:L|o){2}/
        result = regexp.exec('AchooLuv');
        console.log(result[0]);    // 匹配结果为: oo</code>
    </pre>
    <h3><span class="iconfont jh">&#xe64a;</span>标准量词优先匹配</h3>
    <p><span class="ins"><router-link to="../../mc/counter">标准匹配量词</router-link>都是“匹配优先”的，被这些量词修饰的表达式，在匹配成功之前，进行尝试的次数存在上限和下限，而该规则规定，这些尝试总是希望获得最长的匹配（即贪婪模式）！</span></p>
    <p><span class="ins">匹配优先量词之所以得名，是因为它们总是匹配多于匹配成功下限的字符！匹配优先量词虽然首先会尽可能匹配多的字符，但是为了整个表达式能够匹配成功，通常它们会“不情愿”的交还一些已匹配的字符。当然“交还”绝不能破坏匹配成立必须的条件，比如不允许零匹配的<span class="reg">+</span>。来看个简单的例子：</span></p>
    <pre v-highlightjs>
      <code class="javascript">      var regexp = /^.*(\d\d)/,    // 至少捕获两个数字
        result = regexp.exec('Copyright 2017');
        console.log(RegExp.$1);    // 匹配结果为: 17</code>
    </pre>
    <p><span class="ins">上例中，<span class="reg">.*</span>匹配整个字符串<span class="reg">Copyright 2017</span>，但是<span class="reg">\d\d</span>必须匹配，此时<span class="reg">.*</span>开始“交还”字符<span class="reg">7</span>让<span class="reg">\d\d</span>中第一个<span class="reg">\d</span>满足匹配，但是第二个<span class="reg">\d</span>不能满足匹配，<span class="reg">.*</span>继续“交还”字符<span class="reg">1</span>，此时<span class="reg">\d\d</span>满足匹配，并被捕获，匹配结束</span></p>
  </div>
</template>

<script>
export default {
  name: 'Rules'
}
</script>

<style lang="scss" scoped>
@import 'sa/styles/var.scss';
.mpc-con {
  @include tip;
}
</style>
