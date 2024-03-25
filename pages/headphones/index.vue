<template>
  <div class="px-7">
    <div class="bg-white max-w-6xl mx-auto">
      <ProductSection v-for="(headphoneItem, index) in headphonesItems" :key="index" image-position="left"
        :image-src="headphoneItem.image" :title="headphoneItem.name" :description="headphoneItem.description"
        :redirect="getProductRoutes(headphoneItem)" />
      <ItemsSection :itemRelated="getRelatedItems" />
      <MarketingService />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ProductDetails, SiblingsProduct } from "interfaces/audioProduct";
import { getAudioProduct } from "~/data/getData";
const { data } = await useAsyncData<ProductDetails[]>(getAudioProduct);
const headphonesItems = <ProductDetails[] | undefined>data.value?.filter((data) => data.category === "headphones");
const getRelatedItems = computed<SiblingsProduct[] | undefined>(() => {
  return headphonesItems ? headphonesItems[0].relatedCategories : undefined;
})
const getProductRoutes = (item: ProductDetails) => {
  return `/${item.category}/${item.slug}`;
};

</script>
