<template>
<div id="detail">
  <div class="bg-gray-800">
    <detail-nav-bar></detail-nav-bar>
  </div>
    <!-- 200222: sth wrong in detail swiper -->
    <!-- 200307: fixed, wrong name , swiper and swiper item-->
  <scroll class="content">
    <div>
      <detail-swiper :images="topImages"></detail-swiper>

    </div>


    <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
  </scroll>
    <detail-shop-info :shop="shopInfo"></detail-shop-info>
    <!-- <h2>{{$route.params.iid}}</h2> -->
    <!-- 0222: paramInfo can't find-->
    <!-- 0223: settle down, wrong naming.-->
    <detail-param-info :item-params="itemParams"></detail-param-info>
    <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    <goods-list :goods-list="recommends"></goods-list>


    <detail-base-info :goods="goods"></detail-base-info>

</div>


</template>

<script>

import DetailNavBar from './childComps/DetailNavBar'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import Scroll from '../../components/common/Scroll/Scroll.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'

import GoodsList from '../../components/content/goods/GoodsList.vue'

import {getDetail, getRecommend, Goods, Shop, GoodsParam} from '../../network/detail.js'


export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    Scroll,


  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommends: [],

    }
  },
  created() {
    // get the iid
    // 200220: detail request failed, currently move on.
    // 200308: fixed, change new base URL.
    this.iid = this.$route.params.iid

    // get the requested data
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result;
      // get top images
      this.topImages = data.itemInfo.topImages;
      // get product detail
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      // get shop detail
      this.shopInfo = data.shopInfo;
      // get product in more detail
      this.detailInfo = data.detailInfo;
      // get product params
      // this.itemParams = data.GoodsParam(data.itemParams.info, data.itemParams.rule)
      this.itemParams = data.itemParams;
      // get comments
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate;
      }

      // get recommend
      getRecommend().then(res => {
        this.recommends = res.data.list

      })

    })
  },
  methods() {
    console.log("aaa");

  }


}
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}

.content {
  background-color: #fff;
  height: calc(100% -44px);
}

</style>
