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
        id: 2,
        tit: '匹配位置型元字符：',
        tables: [{
          id: 201,
          thead: [{
            id: 20101,
            th: '元字符'
          }, {
            id: 20102,
            th: '中文名称'
          }, {
            id: 20103,
            th: '匹配对象'
          }],
          tbody: [{
            id: 20104,
            tr: [{
              id: 2010401,
              td: '^'
            }, {
              id: 2010402,
              td: '脱字符'
            }, {
              id: 2010403,
              td: '匹配一行起始位置'
            }]
          }, {
            id: 20105,
            tr: [{
              id: 2010501,
              td: '$'
            }, {
              id: 2010502,
              td: '美元符'
            }, {
              id: 2010503,
              td: '匹配一行结束位置'
            }]
          }, {
            id: 20106,
            tr: [{
              id: 2010601,
              td: '\\b'
            }, {
              id: 2010602,
              td: '单词边界符'
            }, {
              id: 2010603,
              td: '匹配单词边界，即单词与空格之间的位置'
            }]
          }, {
            id: 20107,
            tr: [{
              id: 2010701,
              td: '\\B'
            }, {
              id: 2010702,
              td: '非单词边界符'
            }, {
              id: 2010703,
              td: '匹配非单词的边界，即单词与单词之间的某位置'
            }]
          }, {
            id: 20108,
            tr: [{
              id: 2010801,
              td: '(?= char)'
            }, {
              id: 2010802,
              td: '肯定正序环视'
            }, {
              id: 2010803,
              td: '自左向右查找文本,匹配一个位置,该位置的右侧满足子表达式(即 char)'
            }]
          }, {
            id: 20109,
            tr: [{
              id: 2010901,
              td: '(?&lt;= char)'
            }, {
              id: 2010902,
              td: '肯定逆序环视'
            }, {
              id: 2010903,
              td: '自右向左查找文本,匹配一个位置,该位置的左侧满足子表达式(即 char)'
            }]
          }, {
            id: 201091,
            tr: [{
              id: 20109101,
              td: '(?! char)'
            }, {
              id: 20109102,
              td: '否定正序环视'
            }, {
              id: 20109103,
              td: '自左向右查找文本,匹配一个位置,该位置的右侧不满足子表达式(即 char)'
            }]
          }, {
            id: 201092,
            tr: [{
              id: 20109201,
              td: '(?&lt;! char)'
            }, {
              id: 20109202,
              td: '否定逆序环视'
            }, {
              id: 20109203,
              td: '自右向左查找文本,匹配一个位置,该位置的左侧不满足子表达式(即 char)'
            }]
          }]
        }],
        labels: [{
          id: 202,
          con: '<span style="color:red">注：</span>通常匹配位置型元字符只作为某一表达式的一部分(即子表达式)来使用，以提高匹配精度；'
        }, {
          id: 203,
          con: '元字符<span style="color:red"> ^ </span>在字符组内部时将被正则引擎视为逻辑非，即取反；'
        }, {
          id: 204,
          con: '元字符<span style="color:red"> \\b </span>在字符组内部是表示匹配一个退格(U+0008)；'
        }, {
          id: 205,
          con: '环视结构均不会\'占用\'文本,只匹配一个位置。'
        }],
        codes: [{
          id: 20601,
          tit: '元字符<span style="color:red"> ^ </span>实例:',
          code: `     //本实例使用的JS正则语法声明 var regexp = /pattern/flags;

    //假设现在的需求为:只想匹配 行开始处的AchooLuv,不匹配achooluv和行尾的AchooLuv
    var text = 'AchooLuv and achooluv and AchooLuv',   // 注意大小写
        regexp1 = /AchooLuv/g,   // 标识符g表示进行全局匹配
        result1 = text.match(regexp1);
    console.log(result1);   // 匹配结果为: ["AchooLuv", "Achooluv"] 很明显这是把结尾处的AchooLuv也成功匹配了,非我们想要的结果

    //稍稍改造,使用元字符 ^ 让结果更准确
    var regexp2 = /^AchooLuv/g,
        result2 = regexp2.exec(text);   // 该方法的返回值不懂可查看上方的.exec()方法链接
    console.log(result2);    // 匹配结果为: ["AchooLuv",index:0] 由index:0可知该结果为期望的匹配结果
    
    //即便进行忽略字母大小写的模糊匹配,结果满足需求
    var regexp3 = /^achooluv/ig,
        result3 = regexp3.exec(text);
    console.log(result3);    // 匹配结果为: ["AchooLuv",index:0] 和上面的结果一样,符合需求`
        }, {
          id: 20602,
          tit: '元字符<span style="color:red"> $ </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;

    //假设现在的需求为:只想匹配 行尾处的AchooLuv,不匹配achooluv和行首的AchooLuv
    var text = 'AchooLuv and achooluv and AchooLuv',    // 注意大小写
        regexp1 = /AchooLuv/g,
        result1 = text.match(regexp1);
    console.log(result1);   // 匹配结果为: ["AchooLuv", "Achooluv"] 很明显这是把行首处的AchooLuv也成功匹配了,非我们想要的结果

    //稍稍改造,使用元字符 $ 让结果更准确
    var regexp2 = /AchooLuv$/g,
        result2 = regexp2.exec(text);
    console.log(result2);    // 匹配结果为: ["AchooLuv",index:26] 由index:0可知该结果为期望的匹配结果
    
    //任然进行忽略字母大小写的模糊匹配,结果也满足需求
    var regexp3 = /achooluv$/ig,
        result3 = regexp3.exec(text);
    console.log(result3);    // 匹配结果为: ["AchooLuv",index:26] 和上面的结果一样,符合需求`
        }, {
          id: 20603,
          tit: '元字符<span style="color:red"> \\b </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;

    var regexp1 = /\\bachoo\\b/i,   // 匹配内容为一个完整单词 Achoo或achoo
        result1 = regexp1.test('Design by AchooLuv'),
        result2 = regexp1.test('Design by Achoo');    // 匹配成功
    console.log(result1);    // 匹配失败,返回: false
    console.log(result2);    // 匹配成功,返回: true`
        }, {
          id: 20604,
          tit: '元字符<span style="color:red"> \\B </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;

    var regexp1 = /\\bachoo\\B/i,    // 匹配内容为单词AchooLuv中的一部分 Achoo或achoo ,且第二个o字母的右侧为 非单词边界
        result1 = regexp1.test('Design by AchooLuv'),   // 匹配成功
        result2 = regexp1.test('Design by Achoo');
    console.log(result1);    // 匹配成功,返回: true
    console.log(result2);    // 匹配失败,返回: false`
        }, {
          id: 20605,
          tit: '元字符<span style="color:red"> (?=  ) </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;

    var text = 'Design by AchooLuv ',
        regexp = /(?=\\Bluv\\b)/i,    // 匹配内容为: 单词AchooLuv中第二个o字母与字母l之间这一位置
        result = text.replace(regexp,'-');    // 在匹配成功的位置添加符号 -
    console.log(result);    // 返回结果: Design by Achoo-Luv `
        }, {
          id: 20606,
          tit: '元字符<span style="color:red"> (?&lt;=  ) </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;
        
    var text = 'Design by AchooLuv ',
        regexp = /(?<=\\bachoo\\B)/i,    // 匹配内容为: 单词AchooLuv中第二个o字母与字母l之间这一位置
        result = text.replace(regexp,'-');    // 在匹配成功的位置添加符号 -
    console.log(result);   // 返回结果: Design by Achoo-Luv 

    //同时使用肯定正序环视和肯定逆序环视来匹配同一位置
    var regexp1 = /(?<=\\bachoo\\B)(?=\\Bluv\\b)/i,
        result1 = text.replace(regexp1,'-_-');     // 在匹配成功的位置添加符号 -_-
    console.log(result1);    // 返回结果: Design by Achoo-_-Luv `
        }, {
          id: 20607,
          tit: '元字符<span style="color:red"> (?!  ) </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;

    //肯定逆序环视的作用是将匹配对象限制在 AchooLuv Achoo7orz 
    var text = 'Design by AchooLuv and Achoo7orz ',
        regexp = /(?<=\\bachoo\\B)(?!\\Bluv\\b)/i,    // 否定正序环视匹配AchooLuv和Achoo7orz中Achoo后紧接着不是Luv的Achoo7orz
        result = text.replace(regexp,'-');    // 在匹配成功的位置添加符号 -
    console.log(result);    // 返回结果: Design by AchooLuv and Achoo-7orz `
        }, {
          id: 20608,
          tit: '元字符<span style="color:red"> (?&lt;!  ) </span>实例:',
          code: `    //本实例使用的JS正则语法声明 var regexp = /pattern/flags;

    //肯定正序环视的作用是将匹配对象限制在 AchooLuv 7orzLuv 
    var text = 'Design by AchooLuv and 7orzLuv ',
        regexp = /(?&lt;!\\bachoo\\B)(?=\\BLuv\\b)/i,  // 否定逆序环视匹配AchooLuv和7orzLuv中Luv前不是Achoo的7orzLuv
        result = text.replace(regexp,'-');  // 在匹配成功的位置添加符号 -
    console.log(result);    // 返回结果: Design by AchooLuv and 7orz-Luv `
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
