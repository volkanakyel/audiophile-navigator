<template>
  <div class="px-7">
    <div class="bg-white max-w-6xl mx-auto">
      <div class="mt-11">
        <h1 class="uppercase mt-20 text-l">Checkout</h1>
        <p class="uppercase text-orange">Billing details</p>
        <div class="flex mt-5 gap-5">
          <div class="">
            <label class="block" for="name">Name</label>
            <input
              id="name"
              class="border border-solid border-gray-300 rounded-lg p-2"
              type="text"
              placeholder="Alexei Ward"
            />
          </div>
          <div class="">
            <label class="block" for="name">Email Address</label>
            <input
              id=""
              class="border border-solid border-gray-300 rounded-lg p-2"
              type="email"
              name=""
            />
          </div>
          <div class="">
            <label class="block" for="name">Phone Number</label>
            <input
              id=""
              class="border border-solid border-gray-300 rounded-lg p-2"
              type="tel"
              name=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
