<template>
  <div>
    <HeaderSection />
    <div class="bg-white max-w-6xl mx-auto px-7">
      <ItemsSection :item-related="headphoneItems.relatedCategories" />
      <SpeakerSection />
      <div
        class="mt-20 py-28 pl-10 bg-left bg-no-repeat bg-[url('./assets/images/home/mobile/image-speaker-zx7.jpg')] md:bg-no-repeat md:bg-[url('/images/home/tablet/image-speaker-zx7.jpg')] bg-cover rounded-lg"
      >
        <p class="text-l mb-8 uppercase">{{ speakerItem.name }}</p>
        <button
          class="bg-black text-white p-4 uppercase"
          @click="redirectToProduct(speakerItem.category, speakerItem.slug)"
        >
          See Product
        </button>
      </div>
      <div
        class="mt-20 flex justify-center gap-8 items-center flex-col md:flex-row"
      >
        <img
          class="rounded-lg hidden md:block w-1/2"
          src="/images/product-yx1-earphones/desktop/image-gallery-2.jpg"
          alt=""
        />
        <img
          class="w-full rounded-lg md:hidden"
          src="/images/product-yx1-earphones/mobile/image-gallery-2.jpg"
          alt=""
        />
        <div
          class="w-full bg-grey-100 flex flex-col items-start justify-center p-10 rounded-lg md:w-1/2 md:p-14"
        >
          <p class="text-l mb-8 uppercase">{{ earphoneItem.slug }}</p>
          <button
            class="bg-black text-white p-4 uppercase"
            @click="redirectToProduct(earphoneItem.category, earphoneItem.slug)"
          >
            See Product
          </button>
        </div>
      </div>
      <MarketingService />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ProductDetails } from "interfaces/audioProduct";
import data from "~/data/data";

const headphoneItems: ProductDetails = data.find(
  (speaker) => speaker.slug === "xx99-mark-two-headphones"
)!;

const speakerItem: ProductDetails = data.find(
  (speaker) => speaker.slug === "zx7-speaker"
)!;
const earphoneItem: ProductDetails = data.find(
  (speaker) => speaker.slug === "yx1-earphones"
)!;
const redirectToProduct = async (category: string, slug: string) => {
  await navigateTo(`/${category}/${slug}`);
};
</script>
