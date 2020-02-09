<template>
  <div class="home-recommend">
    <div class="home-recommend-item" v-bind:key="item.id" v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style>
  .home-recommend{
    display: flex;
    width: 100%;
    text-align: center;
    padding: 5px;
    border-bottom: 10px solid #eee;
  }
  .home-recommend-item{
    flex: 1;
  }
  .home-recommend-item img{
    width: 70px;
    height: 65px;
    border-radius: 100%;
  }
</style>
