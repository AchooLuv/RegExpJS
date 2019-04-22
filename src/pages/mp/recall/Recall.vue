<template>
  <div class="mpc-con">
    <h2>正则引擎的匹配规则</h2>
    <p><span class="ins">NFA引擎最重要的性质就是支持回溯，那么哪些情况下发生回溯呢？会发生回溯的情况有两种：匹配优先/忽略优先/占有优先量词；多选分支结构。回溯机制的基本原理不难理解，记住两个基本规则：</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>面对众多分支选择时，哪个分支应当首先选择？</h3>
    <p><span class="ins">若需要在“进行尝试”和“跳过尝试”之间选择，对于匹配优先量词，引擎会优先选择“进行尝试”，而对于忽略优先量词，会选择“跳过尝试”！</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>回溯时，应选择哪个保存的状态？</h3>
    <p><span class="ins">距离当前最近储存的选项（即备用状态）就是本地失败强制回溯时返回的！</span></p>
    <p><span class="ins">对于NFA引擎来说，“备用状态”是引擎进行回溯的基础，“备用状态”会保存两个位置：正则表达式中的位置和未尝试的分支在字符串中的位置。在需要回溯时，“备用状态”告诉NFA引擎，匹配可以从此处开始！</span></p>
    <p>来看一些简单的例子：</p>
    <h3><span class="iconfont jh">&#xe64a;</span>匹配未进行回溯的例子</h3>
    <p><span class="ins">使用正则表达式<span class="reg">/Lu?v/</span>匹配字符串<span class="reg">Luv</span>：当字符<span class="reg">L</span>匹配成功后，匹配的当前状态如下</span></p>
    <table class="ms">
      <thead>
        <tr>
          <th>字符串状态</th>
          <th>表达式状态</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>'L<span class="trs"></span>uv'</td>
          <td>L<span class="trs"></span>u?v</td>
        </tr>
      </tbody>
    </table>
    <p><span class="ins">现在该<span class="reg">u?</span>匹配了，此时正则引擎需要决定：是尝试匹配呢？还是跳过匹配？因为<span class="reg">?</span>是匹配优先量词，所以引擎会尝试匹配。但为了确保这个尝试最最终失败后能够恢复，NFA引擎会把以下状态添加到备用状态序列中：</span></p>
    <table class="ms">
      <thead>
        <tr>
          <th>字符串状态</th>
          <th>表达式状态</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>'L<span class="trs"></span>uv'</td>
          <td>Lu?<span class="trs"></span>v</td>
        </tr>
      </tbody>
    </table>
    <p><span class="ins">该"备用状态"告诉引擎：下次匹配从正则表达式的<span class="reg">u?</span>之后，字符串的字符<span class="reg">v</span>之前开始匹配（即跳过<span class="reg">u</span>匹配）。之后继续检查字符<span class="reg">u</span>，能够匹配，状态更新为：</span></p>
    <table class="ms">
      <thead>
        <tr>
          <th>字符串状态</th>
          <th>表达式状态</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>'Lu<span class="trs"></span>v'</td>
          <td>Lu?<span class="trs"></span>v</td>
        </tr>
      </tbody>
    </table>
    <p><span class="ins">继续检查字符<span class="reg">v</span>，也能满足匹配，此时整个匹配完成，“备用状态”不在被需要，弃用“备用状态”，整个匹配结束。</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>匹配进行了回溯的例子</h3>
    <p><span class="ins">用上例相同的正则表达式匹配字符串<span class="reg">Lv</span>，在尝试<span class="reg">u</span>之前，一切与上例过程相同，但此时的<spann class="reg">u</spann>无法匹配，引擎开始回溯至最近保存的状态（即该例中唯一的“备用状态”），即：</span></p>
    <table class="ms">
      <thead>
        <tr>
          <th>字符串状态</th>
          <th>表达式状态</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>'L<span class="trs"></span>v'</td>
          <td>Lu?<span class="trs"></span>v</td>
        </tr>
      </tbody>
    </table>
    <p><span class="ins">此时<span class="reg">v</span>满足匹配，整个匹配结束！</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>进行了回溯但匹配失败的例子</h3>
    <p><span class="ins">整个匹配宣告失败是发生在字符串和表达式均完成了所有回溯测试（备用状态）之后，而不是其中某一个完成其所有回溯测试之后！！！举个简单的例子，我们用同样的正则表达式匹配字符串<span class="reg">Lue</span>，在尝试匹配字符<span class="reg">u</span>之前有“备用状态”：</span></p>
    <table class="ms">
      <thead>
        <tr>
          <th>字符串状态</th>
          <th>表达式状态</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>'L<span class="trs"></span>ue'</td>
          <td>Lu?<span class="trs"></span>v</td>
        </tr>
      </tbody>
    </table>
    <p><span class="ins">在<span class="reg">u</span>匹配成功后，由于<span class="reg">v</span>无法匹配<span class="reg">e</span>，此时引擎回溯到最近保存状态，“交换”字符<span class="reg">u</span>给<span class="reg">v</span>匹配，依然不能满足匹配，该次回溯测试失败，但是此时不存在其它“备用状态”，所以字符串中当前位置的整个匹配宣告失败！</span></p>
    <p><span class="ins">那么整个匹配就要宣告失败了吗？并不会！，匹配将重新开始于状态：</span></p>
    <table class="ms">
      <thead>
        <tr>
          <th>字符串状态</th>
          <th>表达式状态</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>'L<span class="trs"></span>ue'</td>
          <td><span class="trs"></span>Lu?v</td>
        </tr>
      </tbody>
    </table>
    <p><span class="ins">但这些均回溯测试以失败告终，最终整个表达式宣告匹配失败，结束匹配！</span></p>
    <h3><span class="iconfont jh">&#xe64a;</span>忽略优先的回溯匹配</h3>
    <p><span class="ins">使用正则表达式<span class="reg">/Lu??v/</span>匹配字符串<span class="reg">Luv</span>。字符<span class="reg">L</span>匹配之后的状态：</span></p>
    <table class="ms">
      <thead>
        <tr>
          <th>字符串状态</th>
          <th>表达式状态</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>'L<span class="trs"></span>uv'</td>
          <td>L<span class="trs"></span>u??v</td>
        </tr>
      </tbody>
    </table>
    <p><span class="ins">现在该<span class="reg">u?</span>匹配了，此时正则引擎需要决定：是尝试匹配呢？还是跳过匹配？因为<span class="reg">??</span>是忽略优先量词，所以引擎会跳过匹配。但为了确保这个尝试最最终失败后能够恢复，NFA引擎会把以下状态添加到备用状态序列中：</span></p>
    <table class="ms">
      <thead>
        <tr>
          <th>字符串状态</th>
          <th>表达式状态</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>'L<span class="trs"></span>uv'</td>
          <td>L<span class="trs"></span>uv</td>
        </tr>
      </tbody>
    </table>
    <p><span class="ins">保存“备用状态”后，沿着忽略匹配优先的路继续匹配：</span></p>
    <table class="ms">
      <thead>
        <tr>
          <th>字符串状态</th>
          <th>表达式状态</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>'L<span class="trs"></span>uv'</td>
          <td>Lu??<span class="trs"></span>v</td>
        </tr>
      </tbody>
    </table>
    <p><span class="ins">但是此时<span class="reg">v</span>无法匹配字符<span class="reg">u</span>，引擎回溯至最近保存状态：</span></p>
    <table class="ms">
      <thead>
        <tr>
          <th>字符串状态</th>
          <th>表达式状态</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>'L<span class="trs"></span>uv'</td>
          <td>L<span class="trs"></span>uv</td>
        </tr>
      </tbody>
    </table>
    <p><span class="ins">此时<span class="reg">u</span>能匹配字符<span class="reg">u</span>，接下来的<span class="reg">v</span>也能匹配字符<span class="reg">v</span>，到此，整个匹配宣告成功，匹配结束！   和第一个例子对比会发现：虽然匹配优先<span class="reg">Lu?v</span>和忽略优先<span class="reg">Lu??v</span>得到的结果可能是（在本例中相同）相同的，但是回溯的过程是完全不同的！！！</span></p>
  </div>
</template>

<script>
export default {
  name: 'Recall'
}
</script>

<style lang="scss" scoped>
@import 'sa/styles/var.scss';
.mpc-con {
  @include tip;
  table.ms{
    margin-left: .81rem;
    width: 50%;
    font-size: .25rem;
    thead tr th,tbody tr td {
      line-height: 1.2;
      span.trs{
        display: inline-block;
        width: 0;
        height: 0;
        border: .1rem solid transparent;
        border-bottom-color: rgb(255, 0, 0);
        transform: translateY(.1rem);
      }
    }
    @media (max-width: 1024px){
      width: 80%;
    }
  }
}
</style>
