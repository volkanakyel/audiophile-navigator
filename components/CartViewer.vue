<template>
  <div>
    <Teleport to="body">
      <transition name="fade">
        <div v-show="store.getCartState" class="fixed inset-0 bg-black bg-opacity-40 z-40" @click="closeCart"></div>
      </transition>
    </Teleport>
    <div v-show="store.getCartState" class="absolute right-0 mt-16 w-96 bg-white text-black rounded-lg z-50">
      <div class="p-8">
        <div class="flex justify-between mb-8">
          <p class="uppercase">Cart {{ cartItems.length }}</p>
          <p class=" capitalize opacity-50 cursor-pointer underline" @click="clearCart">Remove All</p>
        </div>
        <CartItem v-for="(product, index) in cartItems" :key="index" is-summary-section class="mb-6"
          :product="product" />
        <div class="flex justify-between mb-8">
          <p class="uppercase opacity-50">Total</p>
          <p class="uppercase font-bold">$ {{ totalPrice }}</p>
        </div>
        <button :disabled="cartItems.length === 0" @click="redirectToCheckout"
          class="uppercase w-full bg-orange p-3 text-white rounded font-bold">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFiltersStore } from "~/store/cart";
const store = useFiltersStore();
const cartItems = store.getCartItems;
const totalPrice = store.getTotalPrice;
const closeCart = () => store.closeCartPanel();

const redirectToCheckout = async () => {
  store.closeCartPanel();
  await navigateTo(`/checkout`);
}

const clearCart = () => {
  store.clearCartContent();
  closeCart();
}

</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
