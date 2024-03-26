<template>
  <h2 class="uppercase text-center mt-20 text-l font-bold">You may also like</h2>
  <div class="w-full flex justify-center gap-8 items-center my-8">
    <RecommendationCard v-for="(product, index) in recommendedProduct" :key="index" :product="product" />
  </div>
</template>

<script setup lang="ts">
import { SiblingsProduct } from "~/interfaces/audioProduct";
defineProps<{
  recommendedProduct: SiblingsProduct[],
}>()
</script>

<style scoped></style>
