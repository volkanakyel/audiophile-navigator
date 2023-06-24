<template>
  <div>
    <HeaderSection />
    <div class="bg-white container mx-auto py-32">
      <ItemsSection />
      <div class="w-100 bg-orange text-white relative mt-20 py-28 rounded-lg">
        <img
          class="w-96 absolute bottom-0 left-20"
          src="./assets/images/image-category-page-preview.png"
          alt=""
        />
        <div class="flex flex-col items-end justify-center">
          <p class="text-xl">ZX9 <br />SPEAKER</p>
          <p class="opacity-50">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button class="bg-black text-white p-4 uppercase">See Product</button>
        </div>
      </div>
      <div
        class="mt-20 py-28 pl-10 bg-center bg-no-repeat bg-[url('./assets/images/image-speaker-zx7.jpg')] bg-cover rounded-lg"
      >
        <p class="text-l mb-8">ZX7 SPEAKER</p>
        <button class="bg-black text-white p-4 uppercase">See Product</button>
      </div>
      <div class="mt-20 flex justify-center gap-8">
        <img
          class="w-1/2 rounded-lg"
          src="./assets/images/image-earphones-yx1.jpg"
          alt=""
        />
        <div
          class="w-1/2 bg-grey-100 flex flex-col items-start justify-center pl-10 rounded-lg"
        >
          <p class="text-l mb-8">YX1 EARPHONES</p>
          <button class="bg-black text-white p-4 uppercase">See Product</button>
        </div>
      </div>
      <MarketingService />
    </div>
    <FooterSection />
  </div>
</template>
<script setup lang="ts"></script>
