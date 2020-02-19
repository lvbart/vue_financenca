<template>
  <div id="home">
    <nav-bar class="sticky top-0">
      <div slot="center">Home</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <home-feature-view></home-feature-view>
    <tab-control :titles="['pop', 'new', 'sell']"
    @tabClick="tabClick"/>
    <!-- TODO: how to delete default type, like pop here -->
    <goods-list :goods-list="showGoods"></goods-list>

    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>


  <back-top></back-top>
  </div>

</template>

<script>
// seperate imports in different useage groups

import {getHomeMultiData, getHomeGoods} from '../../network/home.js'
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommend from './childComps/HomeRecommend.vue'
import HomeFeatureView from './childComps/HomeFeatureView.vue'
import backTop from '../../components/common/backTop/backTop.vue'

import NavBar from '../../components/common/navbar/NavBar.vue'

import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'


// same rules apply
export default {
  name: 'Home',
  components: {
    TabControl,
    GoodsList,
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,
    backTop,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goodsList: {
        'pop': {page:0, list:[]},
        'new': {page:0, list:[]},
        'sell': {page:0, list:[]},
      },
      currentType: 'pop'
    }
  },
  computed: {
    showGoods() {
      return this.goodsList[this.currentType].list
    }
  },
  // put created before methods
  created() {
    // 1. request multi data
    this.getMultiData()

    // 2. request home data
    this.getHomeProducts('pop')
    this.getHomeProducts('new')
    this.getHomeProducts('sell')

  },


  methods: {
    // event listening
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },

    // wab requests
    getMultiData() {
      getHomeMultiData().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    })
    },

    getHomeProducts(type) {
      const page = this.goodsList[type].page + 1
      getHomeGoods(type, page).then(res => {
        const goodsList = res.data.list
        this.goodsList[type].list.push(...goodsList)
        this.goodsList[type].page += 1
    })
    }
  },


};
</script>

<style>

</style>
