<template>
  <div>
    <div class="bg-dark-100 w-full text-center py-16">
      <h1 class="text-white font-bold uppercase text-lg">Headphones</h1>
    </div>

    <div class="px-7">
      <div class="bg-white max-w-6xl mx-auto">
        <ProductSection v-for="(headphoneItem, index) in headphonesItems" :key="index" image-position="left"
          :image-src="headphoneItem.image" :title="headphoneItem.name" :description="headphoneItem.description"
          :redirect="getProductRoutes(headphoneItem)" :newItem="headphoneItem.new" />
        <ItemsSection :itemRelated="getRelatedItems" />
        <MarketingService />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ProductDetails, SiblingsProduct, ProductCategory } from "interfaces/audioProduct";
import { getAudioProduct } from "~/data/getData";

useHead({
  title: "Headphones",
})

const { data } = await useAsyncData<ProductDetails[]>(getAudioProduct);
const headphonesItems = data.value?.filter((item): item is ProductDetails => item.category === "headphones" as ProductCategory);
const getRelatedItems = computed<SiblingsProduct[] | undefined>(() => {
  return headphonesItems ? headphonesItems[0].relatedCategories : undefined;
})
const getProductRoutes = (item: ProductDetails) => {
  return `/${item.category}/${item.slug}`;
};

</script>
