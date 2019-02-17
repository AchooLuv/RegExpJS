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
@import 'sa/styles/var.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: -webkit-flex;
  display: flex;
  .docs {
    flex:1;
    margin-top: 1rem;
    margin-left: $nav-width;
  }
}
</style>
