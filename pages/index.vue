<template>
  <div>
    <HeaderSection />
    <div class="bg-white max-w-6xl mx-auto px-7">
      <ItemsSection />
      <SpeakerSection />
      <div
        class="mt-20 py-28 pl-10 bg-left bg-no-repeat bg-[url('./assets/images/home/mobile/image-speaker-zx7.jpg')] md:bg-no-repeat md:bg-[url('./assets/images/home/tablet/image-speaker-zx7.jpg')] bg-cover rounded-lg"
      >
        <p class="text-l mb-8">ZX7 SPEAKER</p>
        <button class="bg-black text-white p-4 uppercase">See Product</button>
      </div>
      <div
        class="mt-20 flex justify-center gap-8 items-center flex-col md:flex-row"
      >
        <img
          class="rounded-lg hidden md:block w-1/2"
          src="../assets/images/product-yx1-earphones/desktop/image-gallery-2.jpg"
          alt=""
        />
        <img
          class="w-full rounded-lg md:hidden"
          src="../assets/images/product-yx1-earphones/mobile/image-gallery-2.jpg"
          alt=""
        />
        <div
          class="w-full bg-grey-100 flex flex-col items-start justify-center p-10 rounded-lg md:w-1/2 md:p-14"
        >
          <p class="text-l mb-8">YX1 EARPHONES</p>
          <button class="bg-black text-white p-4 uppercase">See Product</button>
        </div>
      </div>
      <MarketingService />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
