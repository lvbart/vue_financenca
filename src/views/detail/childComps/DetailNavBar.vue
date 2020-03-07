<template>
  <div>

    <nav-bar class="nav-bar">
      <div slot="left" class="h-16 w-16 px-2 py-1 ml-3" @click="backClick">
        <div>
          <img src="../../../../src/assets/img/arrow-back-outline.svg" alt="">
        </div>


      </div>
      <div slot="center" class="grid grid-cols-4 text-center text-black text-xl">
        <div v-for="(item, index) in titles"
        :class="{active: index === currentIndex}"
        @click="titleClick(index)"
        v-bind:key="item">
          {{item}}
        </div>
      </div>
      </nav-bar>
  </div>

</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'


export default {
  name: 'DetailNavBar',
  components: {
    NavBar,

  },
  data() {
    return {
      titles: ['product', 'params', 'comments', 'recommend'],
      currentIndex: 0,

    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back()
    },
  }


}
</script>

<style scoped>
.active {
  color: red,
}

.nav-bar {
  position: relative;
  z-index: 1;
}

</style>
