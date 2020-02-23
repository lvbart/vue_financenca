<template>
<div  class="h-16">
<swiper-item>
  <swiper-item v-bind:key="item" v-for="item in topImages">
    <img :src="item" alt="">
  </swiper-item>
</swiper-item>
</div>
</template>

<script>
import { Swiper, SwiperItem } from '../../../components/common/swiper'
export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style>

</style>
