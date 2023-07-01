<template>
  <header class="w-full bg-dark-100">
    <div class="max-w-screen-xl mx-auto p-8">
      <div class="flex justify-between text-white">
        <img src="../assets/images/shared/logo.svg" alt="" />
        <nav class="flex justify-center gap-8 uppercase">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/headphones">Headphones</nuxt-link>
          <nuxt-link to="/speakers">Speakers</nuxt-link>
          <nuxt-link to="/earphones">Earphones</nuxt-link>
        </nav>
        <img src="../assets/images/card.svg" alt="cart" @click="openCart" />
        <CartViewer v-if="0" />
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped></style>
