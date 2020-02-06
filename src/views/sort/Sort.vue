<template>
  <card class="py-12" :property="property"/>
</template>

<script>
import Card from '../../components/common/card/Card.vue'

export default {
  name: 'Sort',
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
