<template>
  <div class="px-7">
    <div class="bg-white max-w-6xl mx-auto">
      <ProductSection
        v-for="(earphoneItem, index) in earphonesItems"
        :key="index"
        image-position="left"
        :image-src="earphoneItem.image"
        :title="earphoneItem.name"
        :description="earphoneItem.description"
        :redirect="getProductRoutes(earphoneItem)"
      />
      <ItemsSection :item-related="earphonesItems[0].relatedCategories" />
      <MarketingService />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ProductDetails } from "interfaces/audioProduct";
import data from "~/data/data";
const earphonesItems = data.filter((data) => data.category === "earphones");
const getProductRoutes = (item: ProductDetails) => {
  return `/${item.category}/${item.slug}`;
};
</script>
