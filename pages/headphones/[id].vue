<template>
  <div class="px-7">
    <div class="bg-white max-w-6xl mx-auto">
      <p
        class="capitalize text-grey-300 mt-20 cursor-pointer"
        @click="goToCategory"
      >
        Go back
      </p>
      <BuyProduct
        :image-src="obj.image"
        :description="obj.description"
        :title="obj.name"
        :price="obj.price"
        @productCta="addItemToCart(obj)"
      />
      <div
        class="flex justify-between items-center flex-col gap-20 mt-20 md:flex-row"
      >
        <div class="md:w-2/3">
          <h2 class="text-l uppercase">Features</h2>
          <p class="mt-6">{{ obj.features }}</p>
        </div>
        <div class="self-start md:w-1/3">
          <h2 class="text-l uppercase">In the box</h2>
          <ul class="mt-6">
            <li>Headphones Unit</li>
            <li>Headphones Unit</li>
            <li>Headphones Unit</li>
            <li>Headphones Unit</li>
          </ul>
        </div>
      </div>
      <div
        class="flex gap-4 items-center justify-center flex-col md:flex-row mt-16"
      >
        <div class="order-2 md:order-1">
          <img
            :src="obj.gallery.first"
            alt="Image 1"
            class="w-full h-auto mb-6 rounded-lg"
          />
          <img
            :src="obj.gallery.second"
            alt="Image 2"
            class="w-full h-auto rounded-lg"
          />
        </div>
        <div class="order-1 md:order-2">
          <img
            :src="obj.gallery.third"
            alt="Image 3"
            class="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <div>
        <h2 class="uppercase text-center mt-20 text-l">You may also like</h2>
        <ItemsSection />
      </div>

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
  };
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
