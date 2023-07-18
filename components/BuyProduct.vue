<template>
  <div
    class="mt-20 flex justify-center md:items-center flex-col md:flex-row gap-8"
  >
    <img class="w-full rounded-lg max-w-2xl md:w-1/2" :src="imageSrc" alt="" />
    <div
      class="flex flex-col justify-center items-center md:items-start md:w-1/2"
    >
      <p class="uppercase mb-4 text-orange md:text-left">New Product</p>
      <p class="uppercase text-lg text-center md:text-left">
        {{ title }}
      </p>
      <p class="text-center md:text-left">
        {{ description }}
      </p>
      <button class="uppercase bg-orange p-3 my-4 text-white">
        See Product
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  imageSrc: string;
}>();
</script>

<style scoped></style>
