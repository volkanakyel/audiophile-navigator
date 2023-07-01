<template>
  <div class="w-100 bg-black text-white">
    <div class="max-w-6xl mx-auto p-8 md:p-12">
      <div class="justify-between mb-8 md:flex">
        <img src="../assets/images/shared/logo.svg" alt="" />
        <nav class="flex justify-start gap-5 uppercase mt-4 md:mt-0">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/headphones">Headphones</nuxt-link>
          <nuxt-link to="/speakers">Speakers</nuxt-link>
          <nuxt-link to="/earphones">Earphones</nuxt-link>
        </nav>
      </div>
      <div class="flex justify-between items-center">
        <div>
          <p class="w-96 opacity-50">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p class="mt-8 opacity-50">Copyright 2021. All Rights Reserved</p>
          <div class="flex gap-4 md:hidden">
            <img src="../assets/images/icon-facebook.svg" alt="" />
            <img src="../assets/images/icon-twitter.svg" alt="" />
            <img src="../assets/images/icon-instagram.svg" alt="" />
          </div>
        </div>
        <div class="hidden md:block">
          <img src="../assets/images/icon-facebook.svg" alt="" />
          <img src="../assets/images/icon-twitter.svg" alt="" />
          <img src="../assets/images/icon-instagram.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
