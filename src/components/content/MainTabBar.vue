<template>
   <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="../../assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/home-select.svg" alt="">
        <div slot="item-text">Home</div>
      </tab-bar-item>
      <tab-bar-item path="/sort">
        <img slot="item-icon" src="../../assets/img/tabbar/sort.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/sort-select.svg" alt="">
        <div slot="item-text">Sort</div>
      </tab-bar-item>
      <tab-bar-item path="cart">
        <img slot="item-icon" src="../../assets/img/tabbar/cart.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/cart-select.svg" alt="">
        <div slot="item-text">Cart</div>
      </tab-bar-item>
      <tab-bar-item path="my">
        <img slot="item-icon" src="../../assets/img/tabbar/my.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/my-select.svg" alt="">
        <div slot="item-text">My</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>

import TabBar from './tabbar/TabBar.vue';
import TabBarItem from './tabbar/TabBarItem.vue';

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>

</style>
