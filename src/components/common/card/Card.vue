<template>
  <div>
    <div class="relative px-24 mt-16">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="flex items-baseline">
          <span class="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">New</span>
          <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {{ property.beds }} beds &bull; {{ property.baths }} baths
          </div>
        </div>
        <h4 class="mt-1 font-semibold text-lg leading-tight truncate">{{ property.title }}</h4>
        <div class="mt-1">
          {{ property.formattedPrice }}
          <span class="text-gray-600 text-sm"> / wk</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['property'],
}
</script>
