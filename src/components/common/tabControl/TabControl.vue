<template>
  <div class="tab-control">
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
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    position: sticky;
    top: 100px;
  }

  .tab-control-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint)
  }

</style>
