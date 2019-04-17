<template>
  <div class="erc-con">
    <h2>通过传动装置进行优化</h2>
    <p>通过传动装置优化正则表达式时，即使正则引擎无法预知某个字符串能否匹配，也能减少传动装置真正应用正则表达式的次数！优化传动装置可以通过以下方面进行：</p>
    <h3><span class="iconfont jh">&#xe64a;</span>字符串起始/行锚点优化</h3>
    <p><span class="ins">这种优化措施能够判断，任何以<span class="reg">^</span>开头的正则表达式只能在<span class="reg">^</span>能够匹配的情况下才可能匹配，所以只需要在这些位置应用即可。例如下面这个例子：</span></p>
    <pre v-highlightjs>
      <code class="javascript">      console.time();     // 启动定时器
        /^orz|^luv/.test('luv is ok');   // 测试用例
        console.timeEnd();    //结束定时器，输出用时 ==> default: 0.1201171875ms
        console.time();    // 启动定时器
        /^(?:orz|luv)/.test('luv is ok');   // 测试用例
        console.timeEnd();    //结束定时器，输出用时 ==> default: 0.10693359375ms</code>
    </pre>
    <p><span class="ins">由此可见，使用<span class="reg">^(?:orz|luv)</span>代替<span class="reg">^orz|^luv</span>能够显著的正则的提高匹配速度！</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>隐式锚点优化</h3>
    <p><span class="ins">若正则表达式以<span class="reg">.*</span>或<span class="reg">.+</span>开头，并且没有全局性多选结构，则认为此正则表达式在开头有一个看不见的<span class="reg">^</span>。即使开头的<span class="reg">.*</span>或<span class="reg">.+</span>在括号内，也可以进行同样的优化，但是在遇见捕获型括号时情况就有了变化。比如下例中，期望字符串<span class="reg">X</span>两侧是相同的：</span></p>
    <pre v-highlightjs>
      <code class="javascript">      /(.+)X\1/.test('123X234')    // 返回True</code>
    </pre>
    <h3><span class="iconfont jh">&#xe64a;</span>字符串结束/行锚点优化</h3>
    <p><span class="ins">该优化遇到末尾的<span class="reg">$</span>或其他结束锚点的正则表达式时，会从字符串末尾倒数若干字符的位置开始尝试匹配。比如正则表达式<span class="reg">/Achoo(luv)?$/</span>匹配时只能从字符串末尾倒数第9个字符开始匹配。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>开头字符/字符组/子串识别优化</h3>
    <p><span class="ins">该优化能使传动装置进行快速子字符串检查，在字符串中的合适位置应用正则表达式。比如<span class="reg">this|that|other</span>只能从<span class="reg">[ot]</span>的位置开始匹配，所以传动装置预先检查字符串中的每个字符，只在可能的位置进行尝试应用，这样就能节约大量的时间。能预先检查的子串越长，“错误的开始位置”就越少！</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>内嵌文字字符串检查优化</h3>
    <p><span class="ins">该优化针对的是匹配中固定位置出现的文字字符串，只有在内嵌文字字符串与表达式起始位置的距离固定时才能进行优化。比如<span class="reg">\b(www|luv)\.regexpjs\.com\b</span>能进行该优化，而<span class="reg">\b(www|m)\.regexpjs\.com\b</span>则不行，因为字符串到匹配起始位置的距离不确定（3个字符或1个字符）。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>长度识别传动优化</h3>
    <p><span class="ins">该优化规则为：若当前位置距字符串末尾的长度小于成功匹配所需的最小长度，传动装置会停止匹配尝试。</span></p>
  </div>
</template>

<script>
export default {
  name: 'Transmission'
}
</script>

<style lang="scss" scoped>
@import 'sa/styles/var.scss';
.erc-con {
  @include tip;
}
</style>
