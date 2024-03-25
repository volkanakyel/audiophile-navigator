<template>
  <div class="w-full">
    <div class="flex justify-between items-center gap-4">
      <div class="flex gap-4 items-center">
        <img :src="product.image" width="64" height="64" alt="product" class="rounded-lg" />
        <div>
          <p>{{ product.name }}</p>
          <p class=" opacity-50">$ {{ product.price }}</p>
        </div>
      </div>
      <div v-if="isSummarySection" class="flex gap-5 bg-grey-100 py-2 px-3">
        <p class=" opacity-50" @click="removeQuantity(product)">-</p>
        <p class=" font-bold">{{ product.quantity }}</p>
        <p class=" opacity-50" @click="addQuantity(product)">+</p>
      </div>
      <div v-else>
        <p>x{{ product.quantity }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFiltersStore } from "~/store/cart";
import { ProductItem } from "~/interfaces/audioProduct";
const store = useFiltersStore();
const addQuantity = (product: ProductItem) => store.addQuantityToItem(product);
const removeQuantity = (product: ProductItem) =>
  store.removeQuantityToItem(product);
defineProps<{
  itemQuantity?: Number;
  isSummarySection?: boolean;
  product: ProductItem;
}>();
</script>

<style scoped></style>
