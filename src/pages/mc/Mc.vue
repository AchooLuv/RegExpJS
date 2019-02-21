<template>
  <div class="mc-con">
      <h1>元字符</h1>
      <p>
        该部分内容会先集中介绍元字符本身及其作用，在稍后的内容中出现的正则表达式都将使用<span>JavaScript</span>作为载体来详细的讲解如何使用这些元字符,以及一些需要注意的地方（比如它们之间的运算优先级关系）;
        下面涉及到的<span>JavaScript RegExp</span>方法有不清楚的可查阅以下对应的资料:
      </p>
      <div class="infos">
        <a target="_blank" v-for="info in infos" :key="info.id" :href="info.url" v-html="info.name"></a>
      </div>
      <div class="mcc-con" v-for="mc in mcs" :key="mc.id" :id="mc.anchor">
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
  name: 'Mc',
  data () {
    return {
      infos: [{
        id: 1,
        name: '.exec()<p>前往MDN查看该方法</p>',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec'
      }, {
        id: 2,
        name: '.test()<p>前往MDN查看该方法</p>',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test'
      }, {
        id: 3,
        name: '.match()<p>前往MDN查看该方法</p>',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match'
      }, {
        id: 4,
        name: '.search()<p>前往MDN查看该方法</p>',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search'
      }, {
        id: 5,
        name: '.replace()<p>前往MDN查看该方法</p>',
        url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace'
      }],
      mcs: [{
        id: 1,
        anchor: 'counter',
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
      }, {
        id: 2,
        anchor: 'location',
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
      }, {
        id: 3,
        anchor: 'single',
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
      }, {
        id: 4,
        anchor: 'advance',
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
              td: '固化分组'
            }, {
              id: 4010403,
              td: '匹配char，但不捕获该结果'
            }]
          }, {
            id: 40105,
            tr: [{
              id: 4010501,
              td: '(?&lt;Name>)'
            }, {
              id: 4010502,
              td: '命名捕获'
            }, {
              id: 4010503,
              td: '匹配char，但不捕获该结果'
            }]
          }, {
            id: 40106,
            tr: [{
              id: 4010601,
              td: '(?:modifier)'
            }, {
              id: 4010602,
              td: '模式修饰符'
            }, {
              id: 4010603,
              td: '匹配char，但不捕获该结果'
            }]
          }, {
            id: 40107,
            tr: [{
              id: 4010701,
              td: '(?modifier:)'
            }, {
              id: 4010702,
              td: '模式作用范围'
            }, {
              id: 4010703,
              td: '匹配char，但不捕获该结果'
            }]
          }, {
            id: 40108,
            tr: [{
              id: 4010801,
              td: '(?if  then  |else)'
            }, {
              id: 4010802,
              td: '模式修饰符'
            }, {
              id: 4010803,
              td: '匹配char，但不捕获该结果'
            }]
          }]
        }],
        labels: [{
          id: 402,
          con: '<span style="color:red">注：</span><span style="color:red">char </span>为要匹配的字符串或表达式；'
        }, {
          id: 403,
          con: '<span style="color:red">modifier </span>为模式修饰符字母。'
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
        }]
      }, {
        id: 5,
        anchor: 'other',
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
      }, {
        id: 6,
        anchor: 'priority',
        tit: '运算符优先级：',
        tables: [{
          id: 601,
          thead: [{
            id: 60101,
            th: '元字符'
          }, {
            id: 60102,
            th: '优先级梯队（向下递减）'
          }],
          tbody: [{
            id: 60104,
            tr: [{
              id: 6010401,
              td: '转义字符'
            }, {
              id: 6010402,
              td: '优先级位于第一梯队'
            }]
          }, {
            id: 60105,
            tr: [{
              id: 6010501,
              td: '字符组、进阶型元字符'
            }, {
              id: 6010502,
              td: '优先级位于第二梯队'
            }]
          }, {
            id: 60106,
            tr: [{
              id: 6010601,
              td: '计数功能型元字符'
            }, {
              id: 6010602,
              td: '优先级位于第三梯队'
            }]
          }, {
            id: 60107,
            tr: [{
              id: 6010701,
              td: '脱字符、美元符、\\char、任何字符'
            }, {
              id: 6010702,
              td: '优先级位于第四梯队'
            }]
          }, {
            id: 60108,
            tr: [{
              id: 6010801,
              td: '多选分支符'
            }, {
              id: 6010802,
              td: '优先级位于第五梯队'
            }]
          }]
        }]
      }]
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'sa/styles/var.scss';
.mc-con {
  width: 60%;
  margin: 1rem 0 0 8rem;
  @include h1p;
  @media (max-width: 1024px) {
    width: $docs-width;
    margin-left: 5%;
  }
  .infos {
    display: -webkit-flex;
    display: flex;
    height: 1rem;
    margin: .2rem 0;
    border-radius: .1rem;
    overflow: hidden;
    background: $nav-colors;
    a {
      flex: 0 0 20%;
      box-sizing: border-box;
      padding: .1rem;
      color: rgb(255, 255, 255);
      text-align: center;
      border-right: 1px solid rgb(0, 217, 224);
      line-height: 1.5;
    }
  }
  .mcc-con {
    h2 {
      font-size: .4rem;
      font-weight: 100;
      color: rgb(226, 139, 7);
      margin: .6rem 0 .3rem 0;
    }
    table {
      width: 100%;
      font-size: .31rem;
      border: 1px solid $txt-color;
      border-collapse: collapse;
      letter-spacing: 2px;
      margin-bottom: .2rem;
      thead tr th,tbody tr td {
        border: 1px solid $txt-color;
        padding: .2rem .3rem;
        text-align: center;
        color: $txt-color;
      }
    }
    .divp {
      margin-bottom: .6rem;
      p {
        color:rgb(78, 120, 124);
        &:nth-of-type(1) {
          text-indent: 0;
        }
      }
    }
    .code {
      pre {
        line-height: .2rem;
        letter-spacing: 1px;
      }
      .tit {
        font-size: .35rem;
        color: rgb(0, 212, 71);
      }
      &:nth-of-type(1) {
        margin-top: .5rem;
      }
    }
  }
}
</style>
