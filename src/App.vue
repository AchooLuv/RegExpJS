<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
    <keep-alive>
      <Top></Top>
    </keep-alive>
  </div>
</template>

<script>
import Nav from '@/pages/common/Nav'
import Top from '@/pages/common/Top'
export default {
  name: 'App',
  components: {
    Nav,
    Top
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
