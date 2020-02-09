<template>
  <div id="home">
    <nav-bar>
      <div slot="center">Home</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <tab-control :titles="['trend', 'news', 'select']"/>
    <goods-list/>
  </div>

</template>

<script>
import {getHomeMultiData} from '../../network/home'
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommend from './childComps/HomeRecommend.vue'

import NavBar from '../../components/common/navbar/NavBar.vue'
import TabControl from '../../components/common/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'

export default {
  name: 'Home',
  components: {
    TabControl,
    GoodsList,
    NavBar,
    HomeSwiper,
    HomeRecommend,
  },
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  created() {
    // 1. request multi data
    getHomeMultiData().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    })
  }

};
</script>

<style>

</style>
