<template>
  <div id="app">

    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar.vue'

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "./assets/base.css";
</style>
