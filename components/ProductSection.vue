<template>
  <div
    class="mt-20 flex justify-center md:items-center flex-col md:flex-row gap-8"
  >
    <img
      v-if="imagePosition === 'left'"
      class="w-full rounded-lg max-w-2xl md:w-1/2"
      :src="imageSrc"
      alt=""
    />
    <img
      v-if="imagePosition === 'right'"
      class="w-full rounded-lg max-w-2xl md:w-1/2 block md:hidden"
      :src="imageSrc"
      alt=""
    />
    <div
      class="flex flex-col justify-center items-center md:items-start md:w-1/2"
    >
      <p class="uppercase mb-4 text-orange md:text-left">New Product</p>
      <p class="uppercase text-lg text-center md:text-left">
        XX99 Mark II Headphones
      </p>
      <p class="text-center md:text-left">
        The new XX99 Mark II headphones is the pinnacle of pristine audio. It
        redefines your premium headphone experience by reproducing the balanced
        depth and precision of studio-quality sound.
      </p>
      <button class="uppercase bg-orange p-3 my-4 text-white">
        See Product
      </button>
    </div>
    <img
      v-if="imagePosition === 'right'"
      class="w-full rounded-lg max-w-2xl md:w-1/2 hidden md:block"
      :src="imageSrc"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imagePosition?: "left" | "right";
}>();
</script>

<style scoped></style>
