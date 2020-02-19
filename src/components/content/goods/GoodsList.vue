<template>
  <div class="bg-indigo-200 grid grid-cols-3">
    <div :key="index" v-for="(item, index) in goodsList">
      <div class="">
        <img :src="item.show.img" alt="">
      </div>

      <div class="mt-4 text-center">
        <p class="truncate">{{item.title}}</p>
        <div class="flex">
          <span class="flex-1 text-xl text-black">¥{{item.price}}</span>
          <span class="flex-1 text-normal">{{item.cfav}}</span>
        </div>


      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'GoodsList',
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick() {
      this.$router.push('/detail' + this.goods.new.iid)

    },
  }
};

</script>

<style>


</style>
