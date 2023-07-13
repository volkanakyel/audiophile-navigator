<template>
  <header class="w-full bg-dark-100">
    <div class="max-w-screen-xl mx-auto p-8">
      <div class="flex justify-between text-white relative">
        <img
          src="../assets/images/shared/tablet/icon-hamburger.svg"
          class="md:hidden mr-3"
          alt=""
        />
        <img src="../assets/images/shared/desktop/logo.svg" alt="" />
        <nav class="hidden md:flex md:justify-center md:gap-8 md:uppercase">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/headphones">Headphones</nuxt-link>
          <nuxt-link to="/speakers">Speakers</nuxt-link>
          <nuxt-link to="/earphones">Earphones</nuxt-link>
        </nav>
        <img
          src="../assets/images/shared/desktop/icon-cart.svg"
          alt="cart"
          @click="toggleCard"
        />
        <CartViewer
          :class="{ 'cart-open': cartOpen }"
          class="absolute hidden right-0 top-20"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
const cartOpen = ref(false);
const toggleCard = () => {
  cartOpen.value = !cartOpen.value;
};
</script>

<style scoped>
.cart-open {
  display: block;
}
</style>
