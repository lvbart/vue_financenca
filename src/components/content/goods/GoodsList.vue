<template>
  <div class="goods">
    <goods-list-item v-bind:key="item.id" v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  name: 'GoodsList',
  components: GoodsListItem,
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
};

</script>

<style>


</style>
