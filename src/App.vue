<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar.vue'
import NavBar from './components/common/navbar/NavBar.vue'

export default {
  name: 'app',
  components: {
    MainTabBar,
    NavBar
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
