<template>
  <div>
    <div class="flex justify-between items-center flex-col gap-20 mt-20 md:flex-row">
      <div class="md:w-2/3">
        <h2 class="text-l uppercase font-bold">Features</h2>
        <p class="mt-6 opacity-50">{{ featureList.features }}</p>
      </div>
      <div class="self-start md:w-1/3">
        <h2 class="text-l uppercase font-bold mb-6">In the box</h2>
        <div class="flex items-center gap-6 mb-2" v-for="(boxItem, index) in featureList.includes" :key="index">
          <p class=" text-orange font-bold">{{ boxItem.quantity }}x</p>
          <p class=" opacity-50">{{ boxItem.item }}</p>
        </div>
      </div>
    </div>
    <div class="flex gap-4 items-center justify-center flex-col md:flex-row mt-16">
      <div class="order-2 md:order-1">
        <img :src="featureList.gallery.first" alt="Image 1" class="w-full h-auto mb-6 rounded-lg" />
        <img :src="featureList.gallery.second" alt="Image 2" class="w-full h-auto rounded-lg" />
      </div>
      <div class="order-1 md:order-2">
        <img :src="featureList.gallery.third" alt="Image 3" class="w-full h-auto rounded-lg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductDetails } from "~/interfaces/audioProduct";
defineProps<{
  featureList: ProductDetails,
}>()
</script>

<style scoped>
.cart-open {
  display: block;
}
</style>
