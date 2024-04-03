<template>
  <div class="px-7">
    <div class="bg-white max-w-6xl mx-auto">
      <p class="capitalize text-grey-300 mt-20 cursor-pointer" @click="goToCategory">
        Go back
      </p>
      <BuyProduct :image-src="obj.image" :description="obj.description" :title="obj.name" :price="obj.price"
        @product-cta="addItemToCart(obj)" :newItem="obj.new" />
      <ProductFeatures :featureList="obj" />
      <RecommendationItems :recommendedProduct="obj.others" />
      <ItemsSection :item-related="obj.relatedCategories" />
      <MarketingService />
    </div>
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

useHead({
  title: obj.name,
})
</script>
data/data data/data
