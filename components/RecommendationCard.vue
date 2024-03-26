<template>
  <div class="w-1/3 flex flex-col items-center justify-center">
    <img :src="product.image" alt="recommended product" />
    <p class="mt-8 text-m">{{ product.name }}</p>
    <button class="uppercase bg-orange p-4 my-4 text-white">See Product</button>
  </div>
</template>

<script setup lang="ts">
import { SiblingsProduct } from "~/interfaces/audioProduct";
defineProps<{
  product: SiblingsProduct,
}>()
</script>

<style scoped></style>
