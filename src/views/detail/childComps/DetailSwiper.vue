<template>
<div>
<swiper class="detail-swiper">
  <swiper-item class="item" v-bind:key="index" v-for="(item, index) in images">
    <img :src="item" alt="">
  </swiper-item>
</swiper>
</div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    images: {
      type: Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style scoped>
  .item {
    text-align: center;
    height: 500px;
  }

</style>
