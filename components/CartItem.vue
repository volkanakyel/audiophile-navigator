<template>
  <div class="w-full">
    <div class="flex justify-between items-center">
      <div class="flex gap-4 items-center">
        <img
          src="../assets/images/cart/image-xx59-headphones.jpg"
          width="64"
          height="64"
          alt="product"
          class="rounded-lg"
        />
        <div>
          <p>{{ product.name }}</p>
          <p>$ {{ product.price }}</p>
        </div>
      </div>
      <div v-if="isSummarySection" class="flex gap-2 bg-grey-100 py-2 px-3">
        <p>-</p>
        <p>1</p>
        <p>+</p>
      </div>
      <div v-else>
        <p>x{{ product.quantity }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductItem } from "~/interfaces/audioProduct";
defineProps<{
  itemQuantity?: Number;
  isSummarySection?: boolean;
  product: ProductItem;
}>();
</script>

<style scoped></style>
