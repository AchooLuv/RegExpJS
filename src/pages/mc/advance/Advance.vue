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
  name: 'Advance',
  data () {
    return {
      mcs: [{
        id: 4,
        tit: '进阶型元字符：',
        tables: [{
          id: 401,
          thead: [{
            id: 40101,
            th: '元字符'
          }, {
            id: 40102,
            th: '中文名称'
          }, {
            id: 40103,
            th: '匹配对象'
          }],
          tbody: [{
            id: 40102,
            tr: [{
              id: 4010201,
              td: '(char)'
            }, {
              id: 4010202,
              td: '捕获型括号'
            }, {
              id: 4010203,
              td: '限定多选结构、分组、捕获结果'
            }]
          }, {
            id: 40103,
            tr: [{
              id: 4010301,
              td: '(?:char)'
            }, {
              id: 4010302,
              td: '非捕获型括号'
            }, {
              id: 4010303,
              td: '匹配char，但不捕获该结果'
            }]
          }, {
            id: 40104,
            tr: [{
              id: 4010401,
              td: '(?>char)'
            }, {
              id: 4010402,
              td: '固化分组（暂不支持）'
            }, {
              id: 4010403,
              td: '匹配char，且不“交还”还分组里的任何字符'
            }]
          }, {
            id: 40105,
            tr: [{
              id: 4010501,
              td: '(?&lt;name>)'
            }, {
              id: 4010502,
              td: '命名捕获'
            }, {
              id: 4010503,
              td: '命名捕获分组内容，并通过name调用捕获内容'
            }]
          }]
        }],
        labels: [{
          id: 402,
          con: '<span style="color:red">注：</span><span style="color:red">char </span>为要匹配的字符串或表达式；'
        }, {
          id: 403,
          con: '<span style="color:red">name </span>为合法的JavaScript标识符，描述了捕获的内容；'
        }],
        codes: [{
          id: 40401,
          tit: '元字符<span style="color:red">  ( ) </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;                 
    
    //值得注意的是多层捕获括号嵌套时的捕获顺序
    //1、若左侧的捕获括号内无嵌套捕获括号,则按表达式中出现的顺序 - 从左到右依次捕获;
    //2、若左侧的捕获括号内有嵌套捕获括号,则先在该处按 - 从外到内的顺序依次捕获,再按表达式中出现的顺序 - 从左到右依次捕获;
    //3、若在从左到右的捕获中出现了上面2中的情况,依然按照2中的方法处理; 出现1中的情况,则按1中的方法处理。
    var text = 'Design by AchooLuvAchooLuvAchoo',
        regexp = /(ac(hoo))(luv)/i,   // $1捕获Achoo ,$2捕获hoo ,$3捕获Luv
        result = text.match(regexp);
    console.log(result);    // 匹配结果为: ["AchooLuv", "Achoo", "hoo", "Luv", index: 10]

    //表达式内的反向引用,格式: \\n (n表数字)
    var regexp1 = /(achoo)(luv)\\1/i,    // \\1引用表达式中的(luv),即$2捕获内容
        result1 = text.match(regexp1);
    console.log(result1);     // 匹配结果为:  ["AchooLuvAchoo", "Achoo", "Luv", index: 10]
    //反向引用被捕获后任可被引用
    var regexp2 = /(achoo)(luv)(\\1)(\\2)\\3/i,    // \\1引用表达式中的(achoo),\\3引用表达式中的(\\1)
        result2 = text.match(regexp2);
    console.log(result2);   // 匹配结果为:  ["AchooLuvAchooLuvAchoo", "Achoo", "Luv", "Achoo", "Luv", index: 10]

    //通过$1 ~$9直接引用捕获内容
    var text1 = 'Design by AchooLuv',
        regexp3 = /(achoo)(luv)/i,
        result3 = text1.replace(regexp3,'$2$1');    // 交换单词AchooLuv中的 Achoo和Luv 的顺序
    console.log(result3);   // 输出结果为: Design by LuvAchoo
    //在JS中可以通过RegExp.$1 ~ RegExp.$9取得正则捕获内容的引用
    console.log(RegExp.$1);    // 输出结果为: Achoo
    console.log(RegExp.$2);    // 输出结果为: Luv`
        }, {
          id: 40403,
          tit: '元字符<span style="color:red">  (?: ) </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;                 
    
    var text = 'Design by AchooLuv',
        regexp = /\\b(?:achoo)(luv)\\b/i,    // Achoo不被捕获 , 只捕获Luv且通过$1引用该内容
        result = text.match(regexp);
    console.log(result);   // 匹配结果为: ["AchooLuv", "Luv"]
    console.log(RegExp.$1);    // 输出结果为: Luv`
        }, {
          id: 40404,
          tit: '元字符<span style="color:red">  (?&lt;name&gt;) </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;  
                   
    //命名捕获是ES9才正式支持的正则新特性
    const XJ = /(?&lt;year&gt;[0-9]{4})-(?&lt;month&gt;[0-9]{2})-(?&lt;day&gt;[0-9]{2})/;
    //使用ES6解构语法更为简便
    const {groups: {year,day,month}} = XJ.exec('1995-05-26');
    console.log(year);    // 1995
    console.log(month);   // 05
    console.log(day);   // 26`
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
