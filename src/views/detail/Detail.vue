<template>
<div>
  <detail-nav-bar></detail-nav-bar>

  <goods-list :goods-list="recommends"></goods-list>
  <div>Lv</div>
  <detail-comment-info :comment-info="commentInfo"></detail-comment-info>

  <div>Lv</div>
  <!-- <h2>{{$route.params.iid}}</h2> -->
  <!-- 0222: paramInfo can't find-->
  <!-- 0223: settle down, wrong naming.-->
  <detail-param-info :item-params="itemParams"></detail-param-info>
  <div>Lv</div>

  <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
  <div>Lv</div>

  <detail-base-info :goods="goods"></detail-base-info>
  <shop-info :shop="shop"></shop-info>
  <!-- TODO:200222: sth wrong in detail swiper -->
  <detail-swiper :top-images="topImages"></detail-swiper>
</div>


</template>

<script>

import DetailNavBar from './childComps/DetailNavBar'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import ShopInfo from './childComps/ShopInfo.vue'
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
    ShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,

  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommends: [],

    }
  },
  created() {
    // get the iid
    // TODO: 200220: detail request failed, currently move on.
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
      this.shop = new Shop(data.shopInfo);
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

}
</script>

<style>

</style>
