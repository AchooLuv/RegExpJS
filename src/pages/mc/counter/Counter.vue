<template>
  <div>
      <div class="mcc-con" v-for="mc in mcs" :key="mc.id">
        <h2 v-html="mc.tit"></h2>
        <table v-for="th in mc.tables" :key="th.id">
          <thead>
            <tr>
              <th v-for="td in th.thead" :key="td.id" v-html="td.th"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tb in th.tbody" :key="tb.id">
              <td v-for="tr in tb.tr" :key="tr.id" v-html="tr.td"></td>
            </tr>
          </tbody>
        </table>
        <div class="divp" v-if="mc.labels">
          <p v-for="lb in mc.labels" :key="lb.id" v-html="lb.con"></p>
        </div>
        <div class="code" v-for="pre in mc.codes" :key="pre.id">
          <h3 class="tit" v-html="pre.tit"></h3>
          <pre v-highlightjs>
            <code class="javascript" v-html="pre.code"></code>
          </pre>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data () {
    return {
      mcs: [{
        id: 1,
        tit: '计数功能型元字符：',
        tables: [{
          id: 101,
          thead: [{
            id: 10101,
            th: '元字符'
          }, {
            id: 10102,
            th: '中文名称'
          }, {
            id: 10103,
            th: '匹配对象'
          }],
          tbody: [{
            id: 10202,
            tr: [{
              id: 1020201,
              td: '*'
            }, {
              id: 1020202,
              td: '星号'
            }, {
              id: 1020203,
              td: '匹配任意多次,等价于{0,}'
            }]
          }, {
            id: 10203,
            tr: [{
              id: 1020301,
              td: '+'
            }, {
              id: 1020302,
              td: '加号'
            }, {
              id: 1020303,
              td: '至少匹配一次，等价于{1,}'
            }]
          }, {
            id: 10204,
            tr: [{
              id: 1020401,
              td: '?'
            }, {
              id: 1020402,
              td: '问号'
            }, {
              id: 1020403,
              td: '匹配零次或一次，等价于{0,1}'
            }]
          }, {
            id: 10205,
            tr: [{
              id: 1020501,
              td: '{min,max}'
            }, {
              id: 1020502,
              td: '区间量词'
            }, {
              id: 1020503,
              td: '至少匹配min次，至多匹配max次'
            }]
          }]
        }],
        labels: [{
          id: 102,
          con: '<span style="color:red">注：</span>所有计数型元字符均只作用于之前紧邻的元素；'
        }, {
          id: 103,
          con: '元字符<span style="color:red"> * </span>、元字符<span style="color:red"> ? </span>、元字符<span style="color:red"> + </span>、包括元字符<span style="color:red"> . </span>、元字符<span style="color:red"> | </span>，在字符组内部时将被正则引擎作为普通字符处理。'
        }],
        codes: [{
          id: 10401,
          tit: '元字符<span style="color:red"> * </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;

    var regexp1 = /acho*/i,   // *只作用于之前紧邻的字母o ,匹配表达式完全等价于 /achoo{0,}/i
        result1 = regexp1.exec('AchooLuv');
    console.log(result1[0]);    // 匹配结果为: Achoo

    //取消贪婪模式 - - - 在计数元字符后添加 ?
    var regexp2 = /acho*?/i,   // 匹配表达式完全等价于 /achoo{0,}?/i
        result2 = regexp2.exec('AchooLuv');
    console.log(result2[0]);    // 匹配结果为: Ach

    //在字符组内部 - - - 被正则引擎视为普通字符
    var regexp3 = /[*]/,    // 被视为普通字符 *
        result3 = regexp3.test('AchooLuv');    // 匹配失败
    console.log(result3);    // 匹配结果为: false`
        }, {
          id: 10402,
          tit: '元字符<span style="color:red"> + </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = new RegExp('pattern','flags');

    var regexp1 = new RegExp('acho+','i'),   // +只作用于之前紧邻的字母o ,匹配表达式完全等价于 new RegExp('acho{1,}','i')
        result1 = regexp1.exec('AchooLuv');
    console.log(result1[0]);    // 匹配结果为: Achoo

    //取消贪婪模式 - - - 在计数元字符后添加 ?
    var regexp2 = new RegExp('acho+','i'),   // 匹配表达式完全等价于 new RegExp('acho{1,}','i')
        result2 = regexp2.exec('AchooLuv');
    console.log(result2[0]);    // 匹配结果为: Acho

    //在字符组内部 - - - 被正则引擎视为普通字符
    var regexp3 = new RegExp('[+]','i'),   // 被视为普通字符+ ,匹配失败
        result3 = regexp3.test('AchooLuv');
    console.log(result3);    // 匹配结果为: false`
        }, {
          id: 10403,
          tit: '元字符<span style="color:red"> ? </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;

    var regexp1 = /acho?/i,   // *只作用于之前紧邻的字母o ,匹配表达式完全等价于 /achoo{0,1}/i
        result1 = regexp1.exec('AchooLuv');
    console.log(result1[0]);    // 匹配结果为: Acho

    //取消贪婪模式 - - - 在计数元字符后添加 ?
    var regexp2 = /acho??/i,    // 匹配表达式完全等价于 /achoo{0,1}?/i
        result2 = regexp2.exec('AchooLuv');
    console.log(result2[0]);    // 匹配结果为: Ach

    //在字符组内部 - - - 被正则引擎视为普通字符
    var regexp3 = /[?]/i,     // 被视为普通字符? ,匹配失败
        result3 = regexp3.test('AchooLuv');
    console.log(result3);    // 匹配结果为: false`
        }, {
          id: 10404,
          tit: '元字符<span style="color:red"> {min,max} </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = new RegExp('pattern','flags');

    var regexp1 = new RegExp('acho{2,4}','i'),   // {min,max}只作用于之前紧邻的字母o
        result1 = regexp1.exec('AchoOoOo');
    console.log(result1[0]);    // 匹配结果为: AchoOoO

    //取消贪婪模式 - - - 在计数元字符后添加 ?
    var regexp2 = new RegExp('acho{2,4}?','i'), 
        result2 = regexp2.exec('AchoOoOo');
    console.log(result2[0]);    // 匹配结果为: AchoO`
        }]
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'sa/styles/var.scss';
.mcc-con {
  @include con;
}
</style>
