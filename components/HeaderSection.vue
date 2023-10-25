<template>
  <div
    class="bg-[url('../images/home/mobile/image-header.jpg')] md:bg-[url('/images/home/desktop/image-hero.jpg')] bg-cover bg-center"
  >
    <div class="max-w-6xl mx-auto">
      <hr class="separator" />
      <div class="w-full p-10 gap-4 items-center my-20">
        <div class="text-white flex items-center flex-col md:block">
          <p class="uppercase">New Product</p>
          <p class="text-xl w-80">{{ headphoneItem.name }}</p>
          <p class="my-4 w-80 text-center md:text-left">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button
            class="uppercase bg-orange p-3 my-10"
            @click="redirectToProduct"
          >
            See Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import data from "~/data/data";
const headphoneItem = data.find(
  (headphone) => headphone.slug === "xx99-mark-two-headphones"
)!;
const redirectToProduct = async () => {
  await navigateTo(`/${headphoneItem.category}/${headphoneItem.slug}`);
};
</script>

<style scoped></style>
