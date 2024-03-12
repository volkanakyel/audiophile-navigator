<template>
  <div class="w-100 bg-black text-white">
    <div class="max-w-6xl mx-auto p-8 md:p-12">
      <div class="justify-between mb-8 md:flex">
        <nav class="flex flex-col items-center md:justify-start gap-5 uppercase mt-4 sm:flex-row md:mt-0">
          <img src="/images/shared/desktop/logo.svg" alt="" />
          <nuxt-link to="/" class="hover:text-orange">Home</nuxt-link>
          <nuxt-link to="/headphones" class="hover:text-orange">Headphones</nuxt-link>
          <nuxt-link to="/speakers" class="hover:text-orange">Speakers</nuxt-link>
          <nuxt-link to="/earphones" class="hover:text-orange">Earphones</nuxt-link>
        </nav>
      </div>
      <div class="flex justify-center">
        <p class="opacity-50 text-center md:text-left">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
      </div>
      <div class="md:flex justify-between items-center mt-8">
        <p class="opacity-50 text-center md:text-left">
          Copyright 2021. All Rights Reserved
        </p>
        <div class="flex flex-row items-center justify-center mt-10 gap-4 md:hidden">
          <img src="/images/shared/desktop/icon-facebook.svg" alt="" />
          <img src="/images/shared/desktop/icon-twitter.svg" alt="" />
          <img src="/images/shared/desktop/icon-instagram.svg" alt="" />
        </div>

        <div class="hidden md:flex md:gap-4 text-center">
          <img src="/images/shared/desktop/icon-facebook.svg" alt="" />
          <img src="/images/shared/desktop/icon-twitter.svg" alt="" />
          <img src="/images/shared/desktop/icon-instagram.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
