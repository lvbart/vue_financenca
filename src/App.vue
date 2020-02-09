<template>
  <div id="app">

    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar.vue'

import Home from './views/home/Home.vue'

export default {
  name: 'app',
  components: {
    MainTabBar,

    Home,
  }
}
</script>

<style>

</style>
