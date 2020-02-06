<template>
  <div id="home">
    <tab-control :titles="['trend', 'news', 'select']"/>
    <goods-list/>
  </div>

</template>

<script>

import TabControl from '../../components/common/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'

export default {
  name: 'Home',
  components: {
    TabControl,
    GoodsList,
  },

};
</script>

<style>

</style>
