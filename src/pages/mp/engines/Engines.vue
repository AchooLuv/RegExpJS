<template>
  <div class="mpc-con">
    <h2>正则引擎的介绍</h2>
    <p>
      <span class="ins">正则引擎主要分为基本不同的两大类：一种是<span>DFA</span>引擎，可类比于电动汽车的电动发动机；另一种则是我们要详细讲解的<span>NFA</span>引擎，可类比于汽车的汽油发动机！两类引擎都有很长的历史，不过，正如汽油发动机一样，<span>NFA</span>引擎的历史更长一些，当今的绝大多数主流编程语言采用的也是<span>NFA</span>引擎，下表列举了一些主流的编程语言或工具采用的正则引擎：
      </span>
    </p>
    <table>
      <thead>
        <tr>
          <th>正则引擎类型</th>
          <th>编程语言或工具</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>DFA</td>
          <td>MySQL、flex、lex、egrep</td>
        </tr>
        <tr>
          <td>POSIX NFA</td>
          <td>mawk、GNU Emacs</td>
        </tr>
        <tr>
          <td>传统型 NFA</td>
          <td>Perl、Java、JavaScript、Python、C、C#、C++、PHP、Ruby、.Net</td>
        </tr>
        <tr>
          <td>NFA/DFA混合</td>
          <td>GNU awk、Tcl</td>
        </tr>
      </tbody>
    </table>
    <p>
      <span class="ins">JavaScript采用的正则引擎是传统型NFA引擎，NFA引擎是基于表达式的匹配，这和基于文本的匹配的DFA引擎是完全不同的，NFA引擎与DFA引擎的区别有很多，让我对比来了解NFA引擎：</span>
    </p>
    <h3><span class="iconfont jh">&#xe64a;</span>NFA与DFA在预编译期的区别：</h3>
    <p><span class="ins">在预编译期间，通常NFA的编译速度快于DFA，占用的内存也更少！</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>NFA与DFA在匹配速度上的区别：</h3>
    <p><span class="ins">在匹配速度上，由于NFA是基于表达式的匹配，在报告无法匹配之前，必须尝试正则表达式的所有变体，所以，通常NFA的匹配速度慢于DFA！</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>NFA与DFA在匹配结果上的区别：</h3>
    <p><span class="ins">在匹配结果上，DFA或者POSIX NFA会返回最左边的最长的匹配文本，匹配结果是确定的，而传统型NFA则不一定返回这样的文本，也可能是其他文本，所以传统型NFA的匹配结果是不确定的！</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>NFA与DFA在能力上的区别：</h3>
    <p><span class="ins">NFA提供了一些DFA不支持的功能：捕获分组、环视及其它复杂的零长度确认、忽略优先量词及有序的多选分支结构（POSIX NFA也不支持此功能）、占有优先量词、固化分组！</span></p>
    <p>总结以上区别，在不考虑混用NFA/DFA的情况下，很容易发现：若引擎支持<span class="ins">忽略优先量词(非贪婪模式)</span>，则该引擎一定是传统型NFA引擎；若引擎不支持<span class="ins">忽略优先量词(非贪婪模式)</span>，但是支持<span class="ins">捕获分组和回溯</span>，则该引擎一定是POSIX NFA引擎;若引擎以上三个功能都不支持，则一定是DFA引擎！</p>
  </div>
</template>

<script>
export default {
  name: 'Engines'
}
</script>

<style lang="scss" scoped>
@import 'sa/styles/var.scss';
.mpc-con {
  @include tip;
}
</style>
