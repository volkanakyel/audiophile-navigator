<template>
  <div class="px-7">
    <div class="bg-white max-w-6xl mx-auto">
      <ProductSection
        v-for="(speakerItem, index) in speakersItems"
        :key="index"
        image-position="left"
        :image-src="speakerItem.image"
        :title="speakerItem.name"
        :description="speakerItem.description"
        :redirect="getProductRoutes(speakerItem)"
      />
      <ItemsSection />
      <MarketingService />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ProductDetails } from "interfaces/audioProduct";
import data from "~/data/data";
const speakersItems = data.filter((data) => data.category === "speakers");
const getProductRoutes = (item: ProductDetails) => {
  return `/${item.category}/${item.slug}`;
};
</script>
