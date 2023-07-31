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
          <nuxt-link to="/" class="hover:text-orange">Home</nuxt-link>
          <nuxt-link to="/headphones" class="hover:text-orange"
            >Headphones</nuxt-link
          >
          <nuxt-link to="/speakers" class="hover:text-orange"
            >Speakers</nuxt-link
          >
          <nuxt-link to="/earphones" class="hover:text-orange"
            >Earphones</nuxt-link
          >
        </nav>
        <img
          src="../assets/images/shared/desktop/icon-cart.svg"
          alt="cart"
          class="hover:fill-orange"
          @click="toggleCard"
        />
        <CartViewer
          v-if="cartOpen"
          v-on-click-outside="onClickOutsideHandler"
          class="absolute right-0 top-20"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { vOnClickOutside } from "@vueuse/components";
const cartOpen = ref(false);
const toggleCard = () => {
  cartOpen.value = true;
};
const onClickOutsideHandler = () => {
  cartOpen.value = false;
};
</script>

<style scoped>
.cart-open {
  display: block;
}
</style>
