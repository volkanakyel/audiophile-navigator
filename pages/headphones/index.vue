<template>
  <div class="px-7">
    <div class="bg-white max-w-6xl mx-auto">
      <Suspense>
        <ProductSection
          v-for="(headphoneItem, index) in headphonesItems"
          :key="index"
          image-position="left"
          :image-src="headphoneItem.image"
          :title="headphoneItem.name"
          :description="headphoneItem.description"
          :redirect="getProductRoutes(headphoneItem)"
        />
      </Suspense>
      <ItemsSection :item-related="headphonesItems[0].others" />
      <MarketingService />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ProductDetails } from "interfaces/audioProduct";
import data from "~/data/data";
const headphonesItems = data.filter((data) => data.category === "headphones");
const getProductRoutes = (item: ProductDetails) => {
  return `/${item.category}/${item.slug}`;
};
</script>
