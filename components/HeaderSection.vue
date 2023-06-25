<template>
  <div class="w-full bg-dark-100">
    <div class="max-w-screen-xl mx-auto p-8">
      <div class="flex justify-between text-white">
        <p>Audiophile</p>
        <ul class="flex justify-center gap-8 uppercase">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/headphones">Headphones</nuxt-link>
          <li>Speakers</li>
          <li>Earphones</li>
        </ul>
        <img src="../assets/images/card.svg" alt="" />
      </div>
      <hr class="bg-white" />
      <HeaderHero />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
