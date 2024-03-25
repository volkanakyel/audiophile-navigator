<template>
  <div class="px-7">
    <div class="bg-white max-w-6xl mx-auto">
      <ProductSection v-for="(speakerItem, index) in speakersItems" :key="index" image-position="left"
        :image-src="speakerItem.image" :title="speakerItem.name" :description="speakerItem.description"
        :redirect="getProductRoutes(speakerItem)" />
      <ItemsSection :item-related="getRelatedItems" />
      <MarketingService />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ProductDetails, SiblingsProduct, ProductCategory } from "interfaces/audioProduct";
import { getAudioProduct } from "~/data/getData";

const { data } = await useAsyncData<ProductDetails[]>(getAudioProduct);
const speakersItems = data.value?.filter((item): item is ProductDetails => item.category === "speakers" as ProductCategory);
const getRelatedItems = computed<SiblingsProduct[] | undefined>(() => {
  return speakersItems ? speakersItems[0].relatedCategories : undefined;
})
const getProductRoutes = (item: ProductDetails) => {
  return `/${item.category}/${item.slug}`;
};
</script>
