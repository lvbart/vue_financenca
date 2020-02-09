<template>
  <div class="h-16 bg-gray-200 flex">
    <div class="w-1/3 bg-red-200"><slot name="left">1</slot></div>
    <div class="w-1/3 center"><slot name="center">2</slot></div>
    <div class="w-1/3 bg-red-300"><slot name="right">3</slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",


}
</script>

<style>

</style>
