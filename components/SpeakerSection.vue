<template>
  <div
    class="w-100 bg-orange text-white relative px-20 pb-0 pt-16 flex flex-col justify-center rounded-lg items-center gap-14 md:gap-20 md:flex-row"
  >
    <img
      class="max-w-sm w-full md:max-w-md md:w-1/2"
      src="/images/home/desktop/image-speaker-zx9.png"
      alt=""
    />
    <div
      class="flex flex-col items-center justify-center w-full md:items-start md:w-1/2"
    >
      <p class="text-xl text-center md:text-left">ZX9 <br />SPEAKER</p>
      <p class="opacity-50 text-center md:text-left mb-8 md:mb-0">
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <button
        class="bg-black text-white p-4 uppercase my-8 md:mb-0"
        @click="redirectToProduct"
      >
        See Product
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import data from "~/data/data";
const speakerItem = data.find((speaker) => speaker.slug === "zx9-speaker")!;
const redirectToProduct = async () => {
  await navigateTo(`/${speakerItem.category}/${speakerItem.slug}`);
};
</script>
