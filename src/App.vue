<template>
  <div id="app">
    <Nav></Nav>
    <router-view class="docs"/>
    <keep-alive>
      <Top></Top>
    </keep-alive>
  </div>
</template>

<script>
import Nav from 'sp/common/Nav'
import Top from 'sp/common/Top'
export default {
  name: 'App',
  components: {
    Nav,
    Top
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
