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
  name: 'Location',
  data () {
    return {
      mcs: [{
        id: 3,
        tit: '匹配单个字符型元字符：',
        tables: [{
          id: 301,
          thead: [{
            id: 30101,
            th: '元字符'
          }, {
            id: 30102,
            th: '中文名称'
          }, {
            id: 30103,
            th: '匹配对象'
          }],
          tbody: [{
            id: 303,
            tr: [{
              id: 30301,
              td: '.'
            }, {
              id: 30302,
              td: '点号'
            }, {
              id: 30303,
              td: '匹配(除换行符之外)单个任意字符'
            }]
          }, {
            id: 304,
            tr: [{
              id: 304301,
              td: '[ ]'
            }, {
              id: 304302,
              td: '字符组'
            }, {
              id: 304303,
              td: '匹配单个列出的字符'
            }]
          }, {
            id: 305,
            tr: [{
              id: 30501,
              td: '[^ ]'
            }, {
              id: 30502,
              td: '排除型字符组'
            }, {
              id: 30503,
              td: '匹配单个未列出的字符'
            }]
          }]
        }],
        labels: [],
        codes: [{
          id: 306,
          tit: '元字符<span style="color:red"> . </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;                 
    
    var regexp = /./,
        result = regexp .exec('AchooLuv');
    console.log(result[0]);   // 匹配结果为: A

    //再看一个例子,这个结果是不是出乎意料(你猜测的结果是不是: AchLuv)  ?
    var regexp1 = /.{3}Luv/,
        result1 = regexp1.exec('AchooLuv');
    console.log(result1[0]);    // 匹配结果为: hooLuv  至于为什么会是这个结果,将会在匹配原理中解答!
    
    //在字符组内部 - - - 被正则引擎视为普通字符
    var regexp2 = /[.]/,   // 被视为普通字符 .
        result2 = regexp2.test('AchooLuv');   // 匹配失败
    console.log(result2);    // 匹配结果为: false`
        }, {
          id: 307,
          tit: '元字符<span style="color:red"> [  ] </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;                 
    
    var regexp = /[Lo]/i,    // 只要其中任意一个字符匹配成功,便终止匹配
        result = regexp .exec('AchooLuv');
    console.log(result[0]);   // 匹配结果为: o

    //再看一个例子,这个结果是不是出乎意料(你猜测的结果是不是: oL)  ?
    var regexp1 = /[Lo]{2}/i,
        result1 = regexp1.exec('AchooLuv');
    console.log(result1[0]);    // 然而匹配结果为: oo

    //再-再看一个例子,这个结果符合你的预期吗 ?
    var regexp2 = /[Lo]{3}/i,
        result2 = regexp2.exec('AchooLuv');
    console.log(result2[0]);    // 匹配结果为: ooL  至于为什么会是这些匹配结果,将会在匹配原理中详细介绍!`
        }, {
          id: 308,
          tit: '元字符<span style="color:red"> [^  ] </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;                 
    
    var regexp = /[^achoo]/i,   // 在文本中匹配字符组内未列出的第一个字符
        result = regexp .exec('AchooLuv');
    console.log(result[0]);   // 匹配结果为: L

    //看看这个例子,你预期的结果是不是 AL ?
    var regexp1 = /[^choo]{2}/i,
        result1 = regexp1 .exec('AchooLuv');
    console.log(result1[0]);    // 匹配结果为: Lu

    //再看这个例子,你预期的结果什么呢 ?
    var regexp2 = /[^hoo]{2}/i,
        result2 = regexp2 .exec('AchooLuv');
    console.log(result2[0]);    // 匹配结果为: Ac
    
    //再看这个例子,你预期的结果又是什么呢 ?
    var regexp3 = /[^hoo]{3}/i,
        result3 = regexp3 .exec('AchooLuv');
    console.log(result3[0]);    // 匹配结果为: Luv

    //再看这个例子,你预期的结果又是什么呢 ?
    var regexp4 = /[^hoo]{4}/i,
        result4 = regexp4 .test('AchooLuv');
    console.log(result4);   // 匹配失败,返回: false  至于为什么会是这些匹配结果,将会在匹配原理中详细介绍!`
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
