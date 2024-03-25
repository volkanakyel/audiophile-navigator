<template>
  <div class="relative bg-grey-100 flex flex-col justify-center items-center pt-24 pb-4 rounded-lg w-full sm:w-80">
    <img class="absolute left-1/2 top-8 w-36 -translate-x-1/2 -translate-y-1/2" :src="itemProduct.image" alt="" />
    <p class="uppercase">{{ itemProduct.name }}</p>
    <p class="cursor-pointer" @click="redirectToProduct(itemProduct.name, itemProduct.slug)">
      Shop
    </p>
  </div>
</template>

<script setup lang="ts">
import { SiblingsProduct } from "~/interfaces/audioProduct";
defineProps<{
  itemProduct: SiblingsProduct;
}>();
const redirectToProduct = async (category: string, slug: string) => {
  await navigateTo(`/${category.toLocaleLowerCase()}/${slug}`);
};
</script>

<style scoped></style>
