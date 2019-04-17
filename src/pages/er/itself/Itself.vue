<template>
  <div class="erc-con">
    <h2>优化正则表达式本身</h2>
    <p>传统型NFA引擎让我们更应该关注正则表达式本身，从表达式本身上进行以下优化：</p>
    <h3><span class="iconfont jh">&#xe64a;</span>文字字符串连接优化</h3>
    <p><span class="ins">这应该是最基本的优化了，正则引擎能把<span class="reg">orz</span>当成“一个元素”进行匹配，而不是<span class="reg">o</span>
    <span class="reg">r</span>
    <span class="reg">z</span>。这样就能匹配迭代一个单元，而不是迭代三次。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>化简量词优化</h3>
    <p><span class="ins">该优化避免了NFA引擎的大部分逐步处理开销。正则引擎中的主循环必须通用，才能处理引擎支持的所有结构，而通用意味着“速度慢”，所以将<span class="reg">.*</span>之类的简单量词作为一个整体，此时正则引擎便不必按通用的办法处理，而使用专门化、高速的处理程序来绕过这些结构。比如：<span class="reg">.*</span>和<span class="reg">(?:.)*</span>在逻辑上是相等的，而<span class="reg">.*</span>的性能远高于<span class="reg">(?:.)*</span>。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>消除非必要括号</h3>
    <p><span class="ins">若某种实现方式认为<span class="reg">(?:.)*</span>与<span class="reg">.*</span>等价时，则使用后者。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>消除非必要字符组</h3>
    <p><span class="ins">包含单个字符的字符组是多余的。比如：可以将<span class="reg">[.]</span>转换为<span class="reg">\.</span>。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>忽略优先量词之后的字符优化</h3>
    <p><span class="ins">忽略优先量词通常比匹配优先量词要慢，如果忽略优先量词在捕获型括号内部，其控制权必须在括号内外切换，还会带来额外的开销。该优化的原理就是：若文字字符跟在忽略优先量词之后，只要引擎没有触及那个字符，忽略优先量词可以作为普通的匹配优先量词来处理。比如，预查一组字符，而不是特殊的一个字符<span class="reg">['"](.*?)["']</span>中的<span class="reg">['"]</span>。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>避免“过度”回溯与指数级匹配</h3>
    <p><span class="ins">时刻注意，不要编写<span class="reg">(.+)*</span>之类的量词结合结构，因为这种结构会制造指数级回溯，效率极低。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>使用占有优先量词削减状态</h3>
    <p><span class="ins">由正常量词约束的对象匹配之后，会保留若干“在此处不进行匹配”的状态（即量词的每一轮迭代创建一个状态），而占有优先量词则不会保留这些状态（每一轮迭代时抛弃上一轮的备用状态）。比如：使用<span class="reg">^\w+:</span>来匹配<span class="reg">Subject</span>,<span class="reg">\w+</span>匹配到字符串末尾时，最后的冒号无法匹配，回溯机制强迫<span class="reg">\w+</span>逐个交换字符，在每个位置对<span class="reg">:</span>进行徒劳的尝试。可以使用固化分组<span class="reg">^(?>\w+):</span>或占有优先量词<span class="reg">^\w++:</span>来避免无谓的劳动。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>使用量词进行等价转换</h3>
    <p><span class="ins">在JavaScript中，<span class="reg">\d\d\d\d</span>和<span class="reg">\d{4}</span>在逻辑上虽然相同，但在性能上<span class="reg">\d{4}</span>远优于<span class="reg">\d\d\d\d</span>的，所以，编写正则表达式出现类似的结构时，应尽量使用量词对其进行替换。</span></p>
  </div>
</template>

<script>
export default {
  name: 'Itself'
}
</script>

<style lang="scss" scoped>
@import 'sa/styles/var.scss';
.erc-con {
  @include tip;
}
</style>
