<template>
  <div class="w-96 bg-white text-black rounded-lg p-8">
    <div class="flex justify-between mb-8">
      <p class="uppercase">Cart</p>
      <p class="uppercase">Remove All</p>
    </div>
    <CartItem is-summary-section="true" class="mb-6" />
    <CartItem is-summary-section="true" class="mb-6" />
    <CartItem is-summary-section="true" class="mb-6" />
    <div class="flex justify-between mb-8">
      <p class="uppercase">Total</p>
      <p class="uppercase">$ 5,396</p>
    </div>
    <button class="uppercase w-full bg-orange p-3 text-white">
      <nuxt-link to="/checkout">Checkout</nuxt-link>
    </button>
  </div>
</template>

<script setup>
// import { useFiltersStore } from "~/store/cart";
// const store = useFiltersStore();
</script>

<style scoped></style>
