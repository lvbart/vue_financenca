<template>
  <div class="tab-control text-xl grid grid-cols-3">
    <div v-bind:key="item.id" v-for="item in titles"
    class="tab-control-item" :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(item) {
      this.currentIndex = index;
    }
  }
};

</script>

<style>

</style>
