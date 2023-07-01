<template>
  <div>
    <HeaderSection />
    <div class="bg-white container mx-auto">
      <ItemsSection />
      <SpeakerSection />
      <div
        class="mt-20 py-28 pl-10 bg-center bg-no-repeat bg-[url('./assets/images/image-speaker-zx7.jpg')] bg-cover rounded-lg"
      >
        <p class="text-l mb-8">ZX7 SPEAKER</p>
        <button class="bg-black text-white p-4 uppercase">See Product</button>
      </div>
      <div class="mt-20 flex justify-center gap-8">
        <img
          class="w-1/2 rounded-lg"
          src="../assets/images/image-earphones-yx1.jpg"
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
  </div>
</template>
<script setup lang="ts"></script>
