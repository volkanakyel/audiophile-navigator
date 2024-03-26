<template>
  <div class="px-7">
    <div class="bg-white max-w-6xl mx-auto">
      <p class="capitalize text-grey-300 mt-20 cursor-pointer" @click="goToCategory">
        Go back
      </p>
      <BuyProduct :image-src="obj.image" :description="obj.description" :title="obj.name" :price="obj.price"
        @product-cta="addItemToCart(obj)" />
      <ProductFeatures :featureList="obj" />
      <h2 class="uppercase text-center mt-20 text-l">You may also like</h2>
      <ItemsSection :item-related="obj.relatedCategories" />
    </div>
    <MarketingService />
  </div>
</template>
<script setup lang="ts">
import { ProductDetails, ProductItem } from "interfaces/audioProduct";
import data from "~/data/data";
import { useFiltersStore } from "~/store/cart";
const filterStore = useFiltersStore();
const addItemToCart = (product: ProductDetails) => {
  const productItem: ProductItem = {
    name: product.name,
    price: product.price,
    quantity: 1,
    image: product.image,
  };
  filterStore.openCartPanel();
  filterStore.addItemToCart(productItem);
};
const { id } = useRoute().params;
const obj: ProductDetails = data.find((product) => product.slug === id)!;
const goToCategory = async () => {
  try {
    if (obj.category) {
      await navigateTo(`/${obj?.category}`);
    }
  } catch (error) {
    throw createError({ statusCode: 404, statusMessage: "Product not found" });
  }
};
</script>
data/data data/data
