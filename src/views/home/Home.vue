<template>
  <div id="home">
    <div class="bg-gray-200 min-h-screen p-16 flex justify-center">
      <card :property="property"/>
      <card class="py-12" :property="property"/>

    </div>
  </div>

</template>

<script>
import Card from '../../components/common/card/Card.vue'

export default {
  name: 'Home',
  components: {
    Card,
  },
  data: () => ({
    property: {

      beds: 3,
      baths: 2,
      title: "Modern home in city center",
      priceInCents: 190000,
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    }
  })
};
</script>

<style>

</style>
