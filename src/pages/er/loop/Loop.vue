<template>
  <div class="erc-con">
    <h2>消除正则表达式中的循环</h2>
    <p>消除循环是如何提高正则表达式的匹配效率的呢？那就是传统型NFA引擎赋予我们对表达式的“控制权”，通过尽可能设置匹配过程中的“控制权”，来提高正则的效率。循环：<span class="reg">(orz|luv)*</span>之类问题中星号代表的意义。而消除循环的意思就是要避免无休止的匹配！</p>
    <p>来看一个匹配双引号字符串的正则表达式例子<span class="reg">"[^\\"](\\.[^\\"]*)*"</span>，这个例子的优点很明显：
      <ul>
        <li>匹配速度快：<span class="ins">若不能匹配，该表达式不会进行无休止匹配，引擎会迅速发现它，并终止匹配；若能匹配成功，也不会进入无休止的匹配状态。</span></li>
      </ul>
    </p>
    <p>但缺点也很明显：
      <ul>
        <li>可读性差：<span class="ins">这是最大的问题，表达式<span class="reg">"([^\\"]|\\.)*"</span>在逻辑上与其相同，并且更容易看懂，为了消除循环提高效率，在此牺牲了可读性！</span></li>
        <li>可维护性差：<span class="ins">不仅牺牲了可读性，也牺牲了可维护性，而可维护性更加复杂，因为任何改动都必须保持对两个<span class="reg">[^\\"]</span>相同</span>。</li>
      </ul>
    </p>
    <p>是否需要消除正则表达式中的循环，取决于自己是关注正则表达式的可读性和可维护性，还是更关注正则表达式的匹配高效性！那么如何消除循环？可以从以下两方面考虑：</p>
    <h3><span class="iconfont jh">&#xe64a;</span>使用占有优先量词避免无休止匹配来消除循环</h3>
    <p><span class="ins">我们知道表达式<span class="reg">"([^\\"]+|\\.)*"</span>中的两个量词<span class="reg">+</span> <span class="reg">*</span>会造成无休止的匹配，那么我们便可以通过将其中一个修改为占有优先量词来消除循环，或者修改两个！但是只修改<span class="reg">[]+</span>与修改<span class="reg">[]+</span>和<span class="reg">()*</span>是有很大区别的，当修改<span class="reg">()*</span>时，占有优先会抛弃括号内的所有备选状态，其中包括了<span class="reg">[]+</span>和多选分支结构本身的备选状态，所以修改后者时，表达式的匹配效率会更高。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>使用固化分组避免无休止匹配来消除循环</h3>
    <p><span class="ins">将表达式<span class="reg">"([^\\"]+|\\.)*"</span>改用固化分组<span class="reg">"(?>[^\\"]+|\\.)*"</span>来消除循环。但是同时我们必须清楚固化分组<span class="reg">"(?>[^\\"]+|\\.)*"</span>和占有优先量词<span class="reg">"([^\\"]++|\\.)*+"</span>在抛弃备用状态上是迥然不同的。占有优先量词<span class="reg">"([^\\"]++|\\.)*+"</span>在完成时不会留下任何状态，相反，固化分组<span class="reg">"(?>[^\\"]+|\\.)*"</span>只是消除多选结构每次迭代（回溯）时保留的状态！在该例中<span class="reg">*</span>是独立于固化分组的，不受其影响，所以该表达式任会保留“跳过本轮迭代”的备用状态，若要消除该备用状态也很简单，通过模拟占有优先量词<span class="reg">"(?>([^\\"]+|\\.)*)"</span>来解决。</span></p>
  </div>
</template>

<script>
export default {
  name: 'Loop'
}
</script>

<style lang="scss" scoped>
@import 'sa/styles/var.scss';
.erc-con {
  @include tip;
}
</style>
