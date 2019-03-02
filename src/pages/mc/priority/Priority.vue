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
  name: 'Priority',
  data () {
    return {
      mcs: [{
        id: 6,
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

<style lang="scss" scoped>
@import 'sa/styles/var.scss';
.mcc-con {
  @include con;
}
</style>
