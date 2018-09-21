<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
import MHeader from '@/components/m-header/m-header'
import Tab from  '@/components/tab/tab'
export default {
  name: 'App',
   components: {
    Tab,
    MHeader
  }
}
</script>

<style>
body{
      background-color: #000;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #000;
  /* margin-top: 60px; */
}
</style>
