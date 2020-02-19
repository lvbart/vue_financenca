<template>
  <div class="tab-control flex flex-row h-10">
    <!-- TODO: how to make item center -->
    <div class="flex-1" :key="item.id" v-for="(item, index) in titles" :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span class="px-4 text-xl">{{item}}</span>
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
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }
};

</script>

<style>
.active {
    border-bottom: 2px solid red;

  }

  .active span {
    color: red;
  }
</style>
