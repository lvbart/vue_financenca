<template>
  <swiper class="home-swiper">
    <swiper-item v-for="item in banner" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">

      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper.vue'
import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'

export default {
        name: "HomeSwiper",
        props: {
            banner: {
                type:Array,
                default() {
                    return []
                }
            }
        },
        components:{
          Swiper,
          SwiperItem,
        }
    }
</script>

<style scoped>
</style>
