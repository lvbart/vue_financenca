<template>
  <div id="home">

      <tab-control :titles="['trend', 'news', 'select']"/>

  </div>

</template>

<script>

import TabControl from '../../components/common/tabControl/TabControl.vue'

export default {
  name: 'Home',
  components: {
    TabControl,
  },

};
</script>

<style>

</style>
