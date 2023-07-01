<template>
  <div class="w-96 bg-white text-black rounded-lg p-8">
    <div class="flex justify-between mb-8">
      <p class="uppercase">Cart (3)</p>
      <p class="uppercase">Remove All</p>
    </div>
    <CartItem class="mb-6" />
    <CartItem class="mb-6" />
    <CartItem class="mb-6" />
    <div class="flex justify-between mb-8">
      <p class="uppercase">Total</p>
      <p class="uppercase">$ 5,396</p>
    </div>
    <button class="uppercase w-full bg-orange p-3 text-white">Checkout</button>
  </div>
</template>

<script setup></script>

<style scoped></style>
