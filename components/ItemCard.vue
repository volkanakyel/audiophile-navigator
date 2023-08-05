<template>
  <div
    class="relative bg-grey-100 flex flex-col justify-center items-center pt-20 pb-4 rounded-lg w-full sm:w-80"
  >
    <img
      class="absolute left-1/2 top-0 w-20 -translate-x-1/2 -translate-y-1/2"
      :src="itemProduct.image"
      alt=""
    />
    <p>HEADPHONES</p>
    <p>Shop</p>
  </div>
</template>

<script setup lang="ts">
import { SiblingsProduct } from "~/interfaces/audioProduct";
defineProps<{
  itemProduct: SiblingsProduct;
}>();
</script>

<style scoped></style>
