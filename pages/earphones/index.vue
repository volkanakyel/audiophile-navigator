<template>
  <div>
    <div class="bg-dark-100 w-full text-center py-16">
      <h1 class="text-white font-bold uppercase text-lg">Earphones</h1>
    </div>
    <div class="px-7">
      <div class="bg-white max-w-6xl mx-auto">
        <ProductSection v-for="(earphoneItem, index) in earphonesItems" :key="index" image-position="left"
          :image-src="earphoneItem.image" :title="earphoneItem.name" :description="earphoneItem.description"
          :redirect="getProductRoutes(earphoneItem)" :newItem="earphoneItem.new" />
        <ItemsSection :item-related="getRelatedItems" />
        <MarketingService />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ProductDetails, SiblingsProduct, ProductCategory } from "interfaces/audioProduct";
import { getAudioProduct } from "~/data/getData";

useHead({
  title: "Earphones",
})

const { data } = await useAsyncData<ProductDetails[]>(getAudioProduct);
const earphonesItems = data.value?.filter((item): item is ProductDetails => item.category === "earphones" as ProductCategory);

const getRelatedItems = computed<SiblingsProduct[] | undefined>(() => {
  return earphonesItems ? earphonesItems[0].relatedCategories : undefined;
})
const getProductRoutes = (item: ProductDetails) => {
  return `/${item.category}/${item.slug}`;
};
</script>
