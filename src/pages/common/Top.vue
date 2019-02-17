<template>
  <a ref="top" class="iconfont animated top" v-show="show" @click="top">&#xe6c0;</a>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      show: false
    }
  },
  methods: {
    top () {
      var ele = this.$refs.top
      var self = this
      var timer = null
      var isTop = true
      var cliHeight = document.documentElement.clientHeight || document.body.clientHeight
      window.addEventListener('scroll', function () {
        var top = document.documentElement.scrollTop || document.body.scrollTop
        if (top >= cliHeight) {
          self.show = true
          ele.classList.add('zoomIn')
        } else {
          ele.classList.remove('zoomIn')
          ele.classList.add('fadeOutUp')
        }
        if (!isTop) {
          clearInterval(timer)
        }
        isTop = false
      })
      ele.addEventListener('click', function () {
        timer = setInterval(function () {
          var top = document.documentElement.scrollTop || document.body.scrollTop
          var speed = Math.floor(-top / 5)
          document.documentElement.scrollTop = document.body.scrollTop = top + speed
          isTop = true
          if (top === 0) {
            clearInterval(timer)
          }
        }, 50)
      })
    }
  },
  activated () {
    window.addEventListener('scroll', this.top)
  },
  deactivated () {
    window.addEventListener('scroll', this.top)
  }
}
</script>

 <style lang='scss' scoped>
.top {
  z-index: 5;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  font-size: 1rem;
  color: #1296db;
  cursor: pointer;
  @media (max-width: 1124px) {
    right: .6rem;
    bottom: 2rem;
    font-size: .85rem
  }
  @media (max-width: 414px) {
    right: .2rem;
    bottom: .5rem;
    font-size: .7rem
  }
}
 </style>
