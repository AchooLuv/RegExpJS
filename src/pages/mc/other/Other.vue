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
  name: 'Other',
  data () {
    return {
      mcs: [{
        id: 5,
        tit: '其他类型元字符：',
        tables: [{
          id: 501,
          thead: [{
            id: 50101,
            th: '元字符'
          }, {
            id: 50102,
            th: '中文名称'
          }, {
            id: 50103,
            th: '匹配对象'
          }],
          tbody: [{
            id: 50104,
            tr: [{
              id: 5010401,
              td: '-'
            }, {
              id: 5010402,
              td: '连接符'
            }, {
              id: 5010403,
              td: '用于连接字符串，可表示范围'
            }]
          }, {
            id: 50105,
            tr: [{
              id: 5010501,
              td: '|'
            }, {
              id: 5010502,
              td: '多选分支符'
            }, {
              id: 5010503,
              td: '逻辑或，匹配任意一个子字符串或一个子表达式'
            }]
          }]
        }],
        labels: [{
          id: 502,
          con: '<span style="color:red">注：</span>元字符<span style="color:red"> - </span>只有在字符组内部且不位于第一位时，正则引擎才会将其视作元字符，否则作为普通字符处理；'
        }, {
          id: 503,
          con: '元字符<span style="color:red"> | </span>只作用于紧邻的字符串或元素（一个元素即指一个字符组）。'
        }],
        codes: [{
          id: 504,
          tit: '元字符<span style="color:red"> - </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;                 
    
    var text = 'AchooLuv',
        regexp = /[a-z]{5}/i,   // 此处表示至少匹配字母a到字母z中的任意一个; 量词{5}限定匹配成功5次
        result = text.match(regexp);
    console.log(result[0]);   // 匹配结果为: Achoo

    //被视为普通字符
    var text1 = 'Luv-Achoo',
        text2 = 'ABCA-C',
        regexp1 = /[-a-z]{5}/i,   // 位于字符组内且位于开始处,被正则引擎视为普通字符处理
        regexp2 = /a-c/i,   // 不位于字符组内,也将被正则引擎视为普通字符处理
        result1 = text1.match(regexp1),
        result2 = text2.match(regexp2);
    console.log(result1);    // 匹配结果为: ["Luv-A", index: 0]  
    console.log(result2);   // 匹配结果为: ["A-C", index: 3]`
        }, {
          id: 505,
          tit: '元字符<span style="color:red"> | </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;                 
    
    var text = 'Achoo Luv Achoo|Luv',
        regexp = /Achoo|Luv/i,    // 要么匹配Achoo ,要么匹配Luv
        result = text.match(regexp);
    console.log(result);    // 匹配结果为: ["Achoo", index: 0]

    //被视为普通字符
    var regexp1 = /[Achoo|Luv]{9}/i,    // 匹配Achoo|Luv
        result1 = text.match(regexp1);
    console.log(result1);    // 匹配结果为: ["Achoo|Luv", index: 10]`
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
