<template>
  <header class="w-full bg-dark-100">
    <div class="max-w-screen-xl mx-auto p-8">
      <div class="flex justify-between text-white relative">
        <img src="/images/shared/tablet/icon-hamburger.svg" class="md:hidden mr-3" alt="" />
        <nuxt-link to="/">
          <img src="/images/shared/desktop/logo.svg" alt="" />
        </nuxt-link>
        <nav class="hidden md:flex md:justify-center md:gap-8 md:uppercase">
          <nuxt-link to="/" :class="{ 'text-orange': activeRoutes['/'] }" class="hover:text-orange">Home</nuxt-link>
          <nuxt-link to="/headphones" :class="{ 'text-orange': activeRoutes['/headphones'] }"
            class="hover:text-orange">Headphones</nuxt-link>
          <nuxt-link to="/speakers" :class="{ 'text-orange': activeRoutes['/speakers'] }"
            class="hover:text-orange">Speakers</nuxt-link>
          <nuxt-link to="/earphones" :class="{ 'text-orange': activeRoutes['/earphones'] }"
            class="hover:text-orange">Earphones</nuxt-link>
        </nav>
        <img src="/images/shared/desktop/icon-cart.svg" alt="cart" class="hover:fill-orange" @click="openCart" />
        <transition enter-active-class="transition ease-out duration-200 transform "
          enter-from-class="opacity-0 translate-y-10 scale-95" enter-to-class="opacity-100 translate-y-0 scale-100"
          leave-active-class="ease-in duration-200" leave-from-class="opacity-100 translate-y-0 scale-100"
          leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95">
          <div v-show="filterStore.getCartState" class="absolute right-0 mt-2">
            <CartViewer />
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useFiltersStore } from "~/store/cart";

const filterStore = useFiltersStore();
const openCart = () => filterStore.openCartPanel();

const route = useRoute();

const activeRoutes = computed(() => ({
  '/': route.path === '/',
  '/headphones': route.path === '/headphones',
  '/speakers': route.path === '/speakers',
  '/earphones': route.path === '/earphones',
}));
</script>

<style scoped>
.cart-open {
  display: block;
}
</style>
