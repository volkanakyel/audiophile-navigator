<template>
  <div class="w-full bg-grey-100">
    <div class="max-w-6xl mx-auto py-20 p-4">
      <div class="">
        <p class=" opacity-50 mb-8">Go Back</p>
        <div class="flex flex-wrap items-start justify-center gap-8">
          <div class="flex-auto min-w-0 bg-white max-w-3xl p-10 rounded-lg">
            <h1 class="uppercase text-l font-bold">Checkout</h1>
            <p class="uppercase text-orange mt-8 font-bold">Billing details</p>
            <div class="flex flex-col space-y-4 mt-4">
              <div class="flex space-x-4">
                <div class="flex-grow">
                  <label for="input1">Name</label>
                  <input id="input1" type="text"
                    class="w-full max-w-xs block border border-solid border-grey-400 rounded-lg p-2" />
                </div>
                <div class="flex-grow">
                  <label for="input2">Email Address</label>
                  <input id="input2" type="text"
                    class="w-full max-w-xs block border border-solid border-grey-400 rounded-lg p-2" />
                </div>
              </div>
              <div class="flex">
                <div class="flex-grow">
                  <label for="input3">Phone Number</label>
                  <input id="input3" type="text"
                    class="w-full max-w-xs block border border-solid border-grey-400 rounded-lg p-2" />
                </div>
              </div>
            </div>
            <p class="uppercase text-orange mt-8 font-bold">Shipping info</p>
            <div class="flex gap-4 flex-col mt-4">
              <div class="w-full">
                <label for="input1">Address</label>
                <input id="input1" type="text" class="w-full border border-solid border-grey-400 rounded-lg p-2" />
              </div>
              <div class="flex space-x-4">
                <div class="w-1/2">
                  <label for="input2">ZIP Code</label>
                  <input id="input2" type="text" class="w-full border border-solid border-grey-400 rounded-lg p-2" />
                </div>
                <div class="w-1/2">
                  <label for="input3">City</label>
                  <input id="input3" type="text" class="w-full border border-solid border-grey-400 rounded-lg p-2" />
                </div>
              </div>
              <div>
                <label for="input4" class="block">Country</label>
                <input id="input4" type="text" class="w-1/2 border border-solid border-grey-400 rounded-lg p-2" />
              </div>
            </div>
            <p class="uppercase text-orange mt-8 font-bold">Payment details</p>
            <div class="flex flex-wrap mt-5 gap-5">
              <div class="">
                <label class="block" for="name">Address</label>
                <input id="name" class="w-full border border-solid border-grey-400 rounded-lg p-2" type="text"
                  placeholder="Alexei Ward" />
              </div>
              <div class="">
                <label class="block" for="name">Email Address</label>
                <input id="" class="border border-solid border-grey-400 rounded-lg p-2" type="email" name=""
                  placeholder="alexei@mail.com" />
              </div>
              <div class="">
                <label class="block" for="name">Phone Number</label>
                <input id="" class="border border-solid border-grey-400 rounded-lg p-2" type="tel" name=""
                  placeholder="+1 202-555-0136" />
              </div>
            </div>
          </div>
          <div class="flex-auto bg-white p-8 rounded-lg w-80 max-w-3xl">
            <h2 class="uppercase text-sm mb-6 font-bold">Summary</h2>
            <div v-for="(product, index) in cartItems" :key="index" class="flex justify-between items-center mb-8">
              <div class=" flex gap-4">
                <img class=" rounded-lg" :src="product.image" alt="product image" width="64" height="64">
                <div>
                  <p class="">{{ product.name }}</p>
                  <p class=" opacity-50">$ {{ product.price }}</p>
                </div>
              </div>
              <p class="opacity-50">x1</p>
            </div>
            <div class="flex justify-between mb-3">
              <p class="uppercase opacity-50">Total</p>
              <p class="uppercase font-bold">$ 5,396</p>
            </div>
            <div class="flex justify-between mb-3">
              <p class="uppercase opacity-50">Shipping</p>
              <p class="uppercase font-bold">$ 50</p>
            </div>
            <div class="flex justify-between mb-6">
              <p class="uppercase opacity-50">VAT (included)</p>
              <p class="uppercase font-bold">$ 1,079</p>
            </div>
            <div class="flex justify-between mb-8">
              <p class="uppercase">Grand Total</p>
              <p class="uppercase text-orange font-bold">$ 5,446</p>
            </div>
            <button class="uppercase w-full bg-orange p-3 text-white">
              <nuxt-link to="/checkout" class=" font-bold">Continue & Pay</nuxt-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useFiltersStore } from "~/store/cart";

useHead({
  title: "Checkout",
})

const store = useFiltersStore();
const cartItems = store.getCartItems;
</script>
