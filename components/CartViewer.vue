<template>
  <div class="w-96 bg-white text-black rounded-lg p-8">
    <div class="flex justify-between mb-8">
      <p class="uppercase">Cart {{ store.getCartItems.length }}</p>
      <p class="uppercase cursor-pointer" @click="clearCart">Remove All</p>
    </div>
    <CartItem v-for="(product, index) in cartItems" :key="index" is-summary-section class="mb-6" :product="product" />
    <div class="flex justify-between mb-8">
      <p class="uppercase">Total</p>
      <p class="uppercase">$ {{ totalPrice }}</p>
    </div>
    <button :disabled="cartItems.length === 0" @click="redirectToCheckout"
      class="uppercase w-full bg-orange p-3 text-white">
      Checkout
    </button>
  </div>
</template>

<script setup>
import { useFiltersStore } from "~/store/cart";
const store = useFiltersStore();
const cartItems = store.getCartItems;
const totalPrice = store.getTotalPrice;
const clearCart = () => store.clearCartContent();

const redirectToCheckout = async () => {
  store.closeCartPanel();
  await navigateTo(`/checkout`);
}
</script>

<style scoped></style>
