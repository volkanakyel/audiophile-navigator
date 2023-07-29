<template>
  <div class="w-full flex justify-between p-10 gap-4 items-center my-8">
    <div class="text-white">
      <p class="uppercase">New Product</p>
      <p class="text-xl w-80">{{ headphoneItem.name }}</p>
      <p class="my-4 w-80">
        {{ headphoneItem.description }}
      </p>
      <button class="uppercase bg-orange p-3 my-4" @click="redirectToProduct">
        See Product
      </button>
    </div>
    <img class="w-80" src="../assets/images/image-hero.png" alt="" />
  </div>
</template>

<script setup lang="ts">
import data from "~/data/data";
const headphoneItem = data.find(
  (headphone) => headphone.slug === "xx99-headphone"
)!;
const redirectToProduct = async () => {
  await navigateTo(`/${headphoneItem.category}/${headphoneItem.slug}`);
};
</script>

<style scoped></style>
