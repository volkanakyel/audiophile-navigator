<template>
  <div class="w-full bg-grey-100">
    <div class="max-w-6xl mx-auto py-20">
      <p class="">Go Back</p>
      <div class="flex flex-wrap items-start gap-8 mt-8">
        <div class="bg-white max-w-3xl p-10 rounded-lg">
          <h1 class="uppercase text-l">Checkout</h1>
          <p class="uppercase text-orange mt-8">Billing details</p>
          <div class="flex flex-col space-y-4 mt-4">
            <div class="flex space-x-4">
              <div class="flex-grow">
                <label for="input1">Label 1</label>
                <input
                  id="input1"
                  type="text"
                  class="w-full max-w-xs block border border-solid border-grey-400 rounded-lg p-2"
                />
              </div>
              <div class="flex-grow">
                <label for="input2">Label 2</label>
                <input
                  id="input2"
                  type="text"
                  class="w-full max-w-xs block border border-solid border-grey-400 rounded-lg p-2"
                />
              </div>
            </div>
            <div class="flex">
              <div class="flex-grow">
                <label for="input3">Label 3</label>
                <input
                  id="input3"
                  type="text"
                  class="w-full max-w-xs block border border-solid border-grey-400 rounded-lg p-2"
                />
              </div>
            </div>
          </div>
          <p class="uppercase text-orange mt-8">Shipping info</p>
          <div class="flex gap-4 flex-col mt-4">
            <div class="w-full">
              <label for="input1">Label 1</label>
              <input
                id="input1"
                type="text"
                class="w-full border border-solid border-grey-400 rounded-lg p-2"
              />
            </div>
            <div class="flex space-x-4">
              <div class="w-1/2">
                <label for="input2">Label 2</label>
                <input
                  id="input2"
                  type="text"
                  class="w-full border border-solid border-grey-400 rounded-lg p-2"
                />
              </div>
              <div class="w-1/2">
                <label for="input3">Label 3</label>
                <input
                  id="input3"
                  type="text"
                  class="w-full border border-solid border-grey-400 rounded-lg p-2"
                />
              </div>
            </div>
            <div>
              <label for="input4" class="block">Label 4</label>
              <input
                id="input4"
                type="text"
                class="w-1/2 border border-solid border-grey-400 rounded-lg p-2"
              />
            </div>
          </div>
          <p class="uppercase text-orange mt-8">Payment details</p>
          <div class="flex flex-wrap mt-5 gap-5">
            <div class="">
              <label class="block" for="name">Address</label>
              <input
                id="name"
                class="w-full border border-solid border-grey-400 rounded-lg p-2"
                type="text"
                placeholder="Alexei Ward"
              />
            </div>
            <div class="">
              <label class="block" for="name">Email Address</label>
              <input
                id=""
                class="border border-solid border-grey-400 rounded-lg p-2"
                type="email"
                name=""
                placeholder="alexei@mail.com"
              />
            </div>
            <div class="">
              <label class="block" for="name">Phone Number</label>
              <input
                id=""
                class="border border-solid border-grey-400 rounded-lg p-2"
                type="tel"
                name=""
                placeholder="+1 202-555-0136"
              />
            </div>
          </div>
        </div>
        <div class="bg-white max-w-sm p-8 w-96 rounded-lg">
          <h2 class="uppercase text-m mb-6">Summary</h2>
          <CartItem
            v-for="(product, index) in cartItems"
            :key="index"
            class="mb-6"
            :product="product"
          />
          <div class="flex justify-between mb-4">
            <p class="uppercase">Total</p>
            <p class="uppercase">$ 5,396</p>
          </div>
          <div class="flex justify-between mb-4">
            <p class="uppercase">Shipping</p>
            <p class="uppercase">$ 50</p>
          </div>
          <div class="flex justify-between mb-4">
            <p class="uppercase">VAT (included)</p>
            <p class="uppercase">$ 1,079</p>
          </div>
          <div class="flex justify-between mb-4">
            <p class="uppercase">Grand Total</p>
            <p class="uppercase text-orange">$ 5,446</p>
          </div>
          <button class="uppercase w-full bg-orange p-3 text-white">
            <nuxt-link to="/checkout">Continue & Pay</nuxt-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useFiltersStore } from "~/store/cart";
const store = useFiltersStore();
const cartItems = store.getCartItems;
</script>
