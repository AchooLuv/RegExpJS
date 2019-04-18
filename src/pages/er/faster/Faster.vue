<template>
  <div class="erc-con">
    <h2>提高表达式速度的技巧</h2>
    <p>传统型NFA引擎允许我们主导引擎更快地匹配，但有时提高了表达式的匹配效率，却让其难以维护和理解，所以更多的时候我们需要权衡，修改表达式带来好处的程度来决定应用以下这些技巧：</p>
    <h3><span class="iconfont jh">&#xe64a;</span>使用起始锚点</h3>
    <p><span class="ins">若以<span class="reg">.*</span>开头的正则表达式都应在最前面添加<span class="reg">^</span>或<span class="reg">\A</span>，因为，如果该表达式在某字符串开头不能匹配，那么它一定不能在该字符串的其它位置匹配。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>使用非捕获型括号</h3>
    <p><span class="ins">若不需要引用括号内的文本，则使用非捕获型括号<span class="reg">(?:)</span>。这样不但能节省捕获时间，而且还能减少回溯使用的状态数量。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>从量词中“提取”必须的元素</h3>
    <p><span class="ins">比如，用<span class="reg">xx*</span>替代<span class="reg">x+</span>能“提取”必须匹配的<span class="reg">x</span>。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>“提取”多选结构开头的必须元素</h3>
    <p><span class="ins">比如，用<span class="reg">regexp(?:er|js)</span>替代<span class="reg">(?:regexper|regexpjs)</span>，提取必须匹配的元素<span class="reg">regexp</span>。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>在表达式前面或末尾独立出锚点</h3>
    <p><span class="ins"><span class="reg">^(?:orz|luv)</span>和<span class="reg">^orz|^luv</span>在逻辑上等价，但传统型NFA引擎只会对前者进行优化，所以前者的效率更高。独立出结尾锚点也是一样的原理，比如：<span class="reg">(?:orz|luv)$</span>与<span class="reg">orz$|luv$</span>。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>拆分正则表达式</h3>
    <p><span class="ins">有时候，应用多个小正则表达式的速度比一个大正则表达式快的多，比如，依次检查<span class="reg">orz</span>、<span class="reg">luv</span>之类的速度要比检查<span class="reg">orz|luv</span>的速度快，尤其是检查元素增多后。原因也很简单，因为后者不存在必须匹配成功的文字内容，故不会进行“内嵌文字字符串检查优化”。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>模拟开头字符识别</h3>
    <p><span class="ins">通过在表达式开头添加环视结构进行手动的开头字符识别优化，在正则表达式的其他部分匹配之前，环视结构可以进行“预查”，选择合适的开始位置。比如可以将上例中的<span class="reg">Orz|Luv</span>改写成肯定正序环视结构<span class="reg">(?=[OL])(?:Orz|Luv)</span>，这样写的好处是匹配结果更精确，但性能可能会降。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>使用固化分组与占有优先量词</h3>
    <p><span class="ins">在多数情况下，固化分组和占有优先量词能极大地提高匹配速度，而且不会改变匹配结果。比如<span class="reg">^[^:]+:</span>中的冒号第一次尝试是无法匹配，那么任何回溯都是没有意义的。而使用固化分组<span class="reg">^(?>[^:]+):</span>或者占有优先量词<span class="reg">^[^:]++:</span>能直接抛弃备用状态或者根本不创建多少备用状态。由于引擎没有内容状态可以进行回溯，就不会进行不必要的回溯而增加开销。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>将最可能匹配的多选分支放在前面</h3>
    <p><span class="ins">若匹配正确与顺序无关时，那么应该将最有可能匹配的多选分支放在首位，比如主机名匹配中的<span class="reg">(?:com|org|net|cn|me)\b</span>，将应用最广泛的排在最前面。</span></p>
  </div>
</template>

<script>
export default {
  name: 'Faster'
}
</script>

<style lang="scss" scoped>
@import 'sa/styles/var.scss';
.erc-con {
  @include tip;
}
</style>
