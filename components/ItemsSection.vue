<template>
  <div class="flex flex-wrap sm:flex-nowrap items-center justify-center md:justify-between gap-8 py-20">
    <ItemCard v-for="(item, index) in itemRelated" :key="index" :item-product="item" />
  </div>
</template>

<script setup lang="ts">
import { SiblingsProduct } from "~/interfaces/audioProduct";
defineProps<{
  itemRelated: SiblingsProduct[] | undefined;
}>();
</script>

<style scoped></style>
